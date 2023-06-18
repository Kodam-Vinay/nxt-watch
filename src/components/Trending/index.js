import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ReactContext from '../../context/ReactContext'

import {
  TrendingBgContainer,
  FailureText,
  RetryButton,
  FailureContainer,
  LoaderContainer,
  FailureImg,
  DivContainer,
  TrendingVideosListContainer,
  NavItem,
  Paragraph,
  NavElementContainer,
  NavMainContainer,
} from './styledComponents'
import Sidebar from '../Sidebar'
import Header from '../Header'
import TrendingItem from '../TrendingItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const parsedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channelName: eachItem.channel.name,
        channelLogo: eachItem.channel.profile_image_url,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: parsedData,
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
              again
            </FailureText>
            <RetryButton type="button" onClick={this.getVideosData}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderTrendingContainer = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NavElementContainer applyColor={isDarkMode}>
            <NavItem applyColor={isDarkMode} data-testid="trending">
              <AiFillFire size={40} color="#ff0b37" />
            </NavItem>
            <Paragraph as="h1" applyColor={isDarkMode}>
              Trending
            </Paragraph>
          </NavElementContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <NavMainContainer applyColor={isDarkMode}>
              {this.renderTrendingContainer()}
              <TrendingVideosListContainer>
                {videosList.map(eachItem => (
                  <TrendingItem key={eachItem.id} videosList={eachItem} />
                ))}
              </TrendingVideosListContainer>
            </NavMainContainer>
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

  renderUi = () => (
    <>
      <Header />
      <DivContainer>
        <Sidebar />
        {this.renderResults()}
      </DivContainer>
    </>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <TrendingBgContainer applyColor={isDarkMode}>
              {this.renderUi()}
            </TrendingBgContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Trending
