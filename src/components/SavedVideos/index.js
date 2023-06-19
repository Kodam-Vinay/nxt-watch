import {RiMenuAddLine} from 'react-icons/ri'

import {
  SavedBgContainer,
  DivContainer,
  NavElementContainer,
  NavItem,
  Paragraph,
  NoVideosContainer,
  FailureText,
  NoVideosImg,
  NavMainContainer,
  SavedVideosListContainer,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TrendingItem from '../TrendingItem'

import ReactContext from '../../context/ReactContext'
import SavedVideosContext from '../../context/SavedVideosContext'

const SavedVideos = () => {
  const renderSavedLogoContainer = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NavElementContainer applyColor={isDarkMode}>
            <NavItem applyColor={isDarkMode} data-testid="gaming">
              <RiMenuAddLine size={40} color="#ff0b37" />
            </NavItem>
            <Paragraph as="h1" applyColor={isDarkMode} heading>
              Saved Videos
            </Paragraph>
          </NavElementContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  const renderNoVideosContainer = () => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <NoVideosContainer>
            <NoVideosImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
              alt="no saved videos"
            />

            <FailureText as="h1" applyColor={isDarkMode}>
              No saved videos found
            </FailureText>
            <FailureText as="p" para>
              You can save your videos while watching them
            </FailureText>
          </NoVideosContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  const renderSuccessView = savedVideosList => (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        console.log(savedVideosList)
        return (
          <NavMainContainer applyColor={isDarkMode}>
            {renderSavedLogoContainer()}
            <SavedVideosListContainer>
              {savedVideosList.map(eachItem => (
                <TrendingItem videosList={eachItem} key={eachItem.id} />
              ))}
            </SavedVideosListContainer>
          </NavMainContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  const renderResults = () => (
    <SavedVideosContext.Consumer>
      {val => {
        const {savedVideosList} = val
        return (
          <>
            <Header />
            <DivContainer>
              <Sidebar />
              {savedVideosList.length === 0
                ? renderNoVideosContainer()
                : renderSuccessView(savedVideosList)}
            </DivContainer>
          </>
        )
      }}
    </SavedVideosContext.Consumer>
  )

  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <SavedBgContainer data-testid="savedVideos" applyColor={isDarkMode}>
            {renderResults()}
          </SavedBgContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}
export default SavedVideos
