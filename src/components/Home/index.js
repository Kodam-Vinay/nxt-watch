import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {
  HomeBgContainer,
  DivContainer,
  WebsiteLogo,
  BannerSection,
  BannerPara,
  GetItButton,
  CloseButton,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureText,
  RetryButton,
  BannerAndResult,
  SearchContainer,
  InputElement,
  SearchButton,
  VideosListContainer,
  NoVideosContainer,
  NoVideosImg,
} from './styledComponents'

import Header from '../Header'
import Sidebar from '../Sidebar'
import ReactContext from '../../context/ReactContext'
import HomeData from '../HomeData'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    showBanner: true,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getVideosData()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderNoVideosView = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <FailureText applyColor={isDarkMode}>
              No search results found
            </FailureText>
            <FailureText applyColor={isDarkMode} as="p" para>
              Try different key words or remove search filter
            </FailureText>
            <RetryButton type="button" onClick={this.getVideosData}>
              Retry
            </RetryButton>
          </NoVideosContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  renderSuccessView = () => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoVideosView()
    }
    return (
      <VideosListContainer>
        {videosList.map(eachItem => (
          <HomeData key={eachItem.id} videosList={eachItem} />
        ))}
      </VideosListContainer>
    )
  }

  renderBanner = () => (
    <BannerSection data-testid="banner">
      <CloseButton
        type="button"
        onClick={this.onClickCloseBanner}
        data-testid="close"
      >
        <IoMdClose size={20} />
      </CloseButton>
      <div>
        <WebsiteLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerPara>Buy Nxt Watch Premium prepaid plans with UPI</BannerPara>
        <GetItButton type="button">GET IT NOW</GetItButton>
      </div>
    </BannerSection>
  )

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

  renderSearchInput = () => {
    const {searchInput} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value

          return (
            <SearchContainer applyColor={isDarkMode}>
              <InputElement
                type="search"
                placeholder="search"
                applyColor={isDarkMode}
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <SearchButton
                applyColor={isDarkMode}
                onClick={this.getVideosData}
              >
                <BsSearch
                  size={18}
                  color={isDarkMode ? '#f9f9f9' : '#181818'}
                  data-testid="searchButton"
                />
              </SearchButton>
            </SearchContainer>
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

  renderUi = () => {
    const {showBanner} = this.state
    return (
      <>
        <Header />
        <DivContainer>
          <Sidebar />
          <BannerAndResult>
            {showBanner ? this.renderBanner() : null}
            {this.renderSearchInput()}
            {this.renderResults()}
          </BannerAndResult>
        </DivContainer>
      </>
    )
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <HomeBgContainer applyColor={isDarkMode} data-testid="home">
              {this.renderUi()}
            </HomeBgContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Home
