import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiMenuAddLine} from 'react-icons/ri'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'

import ReactContext from '../../context/ReactContext'
import SavedVideosContext from '../../context/SavedVideosContext'

import {
  MainContainer,
  VideoDetailsContainer,
  FailureText,
  RetryButton,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  VideoAndDetails,
  PlayerContainer,
  VideoTitle,
  LikesAndViewsContainer,
  ViewsAndPostedContainer,
  ViewsText,
  LikesAndSaveContainer,
  EachButton,
  ChannelDetails,
  ChannelDetailsText,
  ChannelDetailsText2,
  VideoDescriptionText,
  ChannelLogo,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    liked: false,
    disliked: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  onClickLike = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      disliked: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      disliked: !prevState.disliked,
      liked: false,
    }))
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoDetails = data.video_details
      const parsedData = {
        id: videoDetails.id,
        description: videoDetails.description,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
        channel: {
          name: videoDetails.channel.name,
          profileImageUrl: videoDetails.channel.profile_image_url,
          subscriberCount: videoDetails.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: parsedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <LoaderContainer className="loader-container" data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkMode ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderFailureView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        const imgUrl = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureContainer>
            <FailureImg src={imgUrl} alt="failure view" />

            <FailureText applyColor={isDarkMode}>
              Oops! Something Went Wrong
            </FailureText>
            <FailureText applyColor={isDarkMode} as="p" para>
              We are having some trouble to complete your request. Please try
              again.
            </FailureText>
            <RetryButton type="button" onClick={this.getVideoDetails}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderSuccessView = () => {
    const {videoDetails, liked, disliked} = this.state
    const {
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
      description,
      id,
    } = videoDetails
    const {profileImageUrl, name, subscriberCount} = channel
    let publishedDate = formatDistanceToNow(new Date(publishedAt)).split(' ')
    if (publishedDate.length === 3) {
      publishedDate.shift()
      publishedDate = publishedDate.join(' ')
    }

    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <VideoAndDetails applyColor={isDarkMode}>
              <PlayerContainer>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100%"
                  height="100%"
                />
              </PlayerContainer>
              <VideoTitle applyColor={isDarkMode}>{title}</VideoTitle>
              <LikesAndViewsContainer>
                <ViewsAndPostedContainer>
                  <ViewsText>{viewCount} views</ViewsText>
                  <ViewsText as="p">{publishedDate} ago</ViewsText>
                </ViewsAndPostedContainer>
                <LikesAndSaveContainer>
                  <EachButton
                    type="button"
                    onClick={this.onClickLike}
                    applyColor={liked}
                  >
                    <BiLike size={20} style={{marginRight: '5px'}} />
                    Like
                  </EachButton>
                  <EachButton
                    type="button"
                    onClick={this.onClickDisLike}
                    applyColor={disliked}
                  >
                    <BiDislike size={20} style={{marginRight: '5px'}} />
                    DisLike
                  </EachButton>
                  <SavedVideosContext.Consumer>
                    {val => {
                      const {updateSave, savedVideosList} = val
                      const present = savedVideosList.find(
                        each => each.id === id,
                      )
                      const isActive = present !== undefined
                      const savedText = present !== undefined ? 'saved' : 'save'
                      return (
                        <EachButton
                          applyColor={isActive}
                          type="button"
                          onClick={() => updateSave(videoDetails)}
                        >
                          <RiMenuAddLine
                            size={20}
                            style={{marginRight: '5px'}}
                          />
                          {savedText}
                        </EachButton>
                      )
                    }}
                  </SavedVideosContext.Consumer>
                </LikesAndSaveContainer>
              </LikesAndViewsContainer>
              <hr />
              <ChannelDetails>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <div>
                  <ChannelDetailsText applyColor={isDarkMode}>
                    {name}
                  </ChannelDetailsText>
                  <ChannelDetailsText2>{subscriberCount}</ChannelDetailsText2>
                </div>
              </ChannelDetails>
              <VideoDescriptionText applyColor={isDarkMode}>
                {description}
              </VideoDescriptionText>
            </VideoAndDetails>
          )
        }}
      </ReactContext.Consumer>
    )
  }

  renderResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <MainContainer
              applyColor={isDarkMode}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoDetailsContainer>
                <Sidebar />
                {this.renderResults()}
              </VideoDetailsContainer>
            </MainContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default VideoItemDetails
