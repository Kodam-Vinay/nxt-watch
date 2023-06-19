import {Component} from 'react'
import {IoLogoGameControllerB} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactContext from '../../context/ReactContext'

import {
  GamingBgContainer,
  LoaderContainer,
  FailureContainer,
  FailureImg,
  FailureText,
  RetryButton,
  DivContainer,
  NavElementContainer,
  NavItem,
  Paragraph,
  GamingListContainer,
  NavMainContainer,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import GamingItem from '../GamingItem'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
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
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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

  renderGamingContainer = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NavElementContainer applyColor={isDarkMode}>
            <NavItem applyColor={isDarkMode} data-testid="gaming">
              <IoLogoGameControllerB size={40} color="#ff0b37" />
            </NavItem>
            <Paragraph as="h1" applyColor={isDarkMode} heading>
              Gaming
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
              {this.renderGamingContainer()}
              <GamingListContainer>
                {videosList.map(eachItem => (
                  <GamingItem key={eachItem.id} videosList={eachItem} />
                ))}
              </GamingListContainer>
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
            <GamingBgContainer applyColor={isDarkMode}>
              {this.renderUi()}
            </GamingBgContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default Gaming
