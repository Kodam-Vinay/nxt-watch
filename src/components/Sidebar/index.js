import NavItems from '../NavItems'
import {
  DivContainer,
  ContactUsSection,
  Paragraph,
  LogosContainer,
  Logo,
} from './styledComponents'
import ReactContext from '../../context/ReactContext'

const Sidebar = () => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <DivContainer applyColor={isDarkMode}>
          <NavItems />
          <ContactUsSection>
            <Paragraph applyColor={isDarkMode}>CONTACT US</Paragraph>
            <LogosContainer>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </LogosContainer>
            <Paragraph applyColor={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </Paragraph>
          </ContactUsSection>
        </DivContainer>
      )
    }}
  </ReactContext.Consumer>
)
export default Sidebar
