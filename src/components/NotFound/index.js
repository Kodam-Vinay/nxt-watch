import ReactContext from '../../context/ReactContext'
import {
  NotFoundBgContainer,
  ImageElement,
  Heading,
  Paragraph,
  DivContainer,
} from './styledComponents'
import Header from '../Header'

const NotFound = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <NotFoundBgContainer applyColor={isDarkMode}>
          <Header />
          <DivContainer>
            {isDarkMode ? (
              <ImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                alt="not found"
              />
            ) : (
              <ImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                alt="not found"
              />
            )}
            <Heading applyColor={isDarkMode}>Page Not Found</Heading>
            <Paragraph applyColor={isDarkMode}>
              we are sorry, the page you requested could not be found.
            </Paragraph>
          </DivContainer>
        </NotFoundBgContainer>
      )
    }}
  </ReactContext.Consumer>
)
export default NotFound
