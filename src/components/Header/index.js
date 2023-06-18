import {Link, withRouter} from 'react-router-dom'
import {BsBrightnessHigh} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import './index.css'
import ReactContext from '../../context/ReactContext'
import {
  NavbarContainer,
  ImageElement,
  DivContainer,
  DarkModeButton,
  LargeDivContainer,
  LogoutButton,
  NavItemsContainer,
  NavItemsList,
  LogoutPopupContent,
  Button,
  CloseButton,
} from './styledComponents'
import NavItems from '../NavItems'
import NavMenuContext from '../../context/NavMenuContext'

const Header = props => {
  const {history} = props
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ReactContext.Consumer>
      {value => {
        const {isDarkMode, onClickThemeIcon} = value
        const onClickThemeMode = () => {
          onClickThemeIcon()
        }
        const websiteLogo = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <NavbarContainer applyColor={isDarkMode}>
            <NavMenuContext.Consumer>
              {activeValues => {
                const {onClickNavItem} = activeValues
                return (
                  <Link to="/">
                    <ImageElement
                      src={websiteLogo}
                      alt="website logo"
                      onClick={() => onClickNavItem('HOME')}
                    />
                  </Link>
                )
              }}
            </NavMenuContext.Consumer>
            <DivContainer>
              <DarkModeButton
                type="button"
                onClick={onClickThemeMode}
                data-testid="theme"
              >
                {isDarkMode ? (
                  <BsBrightnessHigh
                    color={isDarkMode ? '#ffffff' : '#000000'}
                    size={22}
                  />
                ) : (
                  <FaMoon
                    color={isDarkMode ? '#ffffff' : '#000000'}
                    size={22}
                  />
                )}
              </DarkModeButton>
              <Popup
                modal
                trigger={
                  <DarkModeButton type="button" data-testid="theme">
                    <GiHamburgerMenu
                      color={isDarkMode ? '#ffffff' : '#000000'}
                      size={22}
                    />
                  </DarkModeButton>
                }
                className="popup-content"
              >
                {close => (
                  <NavItemsContainer applyColor={isDarkMode}>
                    <CloseButton
                      type="button"
                      closeButton
                      onClick={() => close()}
                    >
                      <IoMdClose
                        color={isDarkMode ? '#ffffff' : '#000000'}
                        size={22}
                      />
                      <NavItemsList>
                        <NavItems />
                      </NavItemsList>
                    </CloseButton>
                  </NavItemsContainer>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <DarkModeButton type="button">
                    <FiLogOut
                      color={isDarkMode ? '#ffffff' : '#000000'}
                      size={22}
                    />
                  </DarkModeButton>
                }
                className="logout-popup"
              >
                {close => (
                  <LogoutPopupContent applyColor={isDarkMode}>
                    <p>Are you sure, you want to logout</p>
                    <div>
                      <Button outline type="button" onClick={() => close()}>
                        Cancel
                      </Button>
                      <Button
                        bgColor="blue"
                        color="white"
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </Button>
                    </div>
                  </LogoutPopupContent>
                )}
              </Popup>
            </DivContainer>
            <LargeDivContainer>
              <DarkModeButton
                type="button"
                onClick={onClickThemeMode}
                data-testid="theme"
              >
                {isDarkMode ? (
                  <BsBrightnessHigh
                    color={isDarkMode ? '#ffffff' : '#000000'}
                    size={30}
                  />
                ) : (
                  <FaMoon
                    color={isDarkMode ? '#ffffff' : '#000000'}
                    size={30}
                  />
                )}
              </DarkModeButton>
              <ImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                profileImage
              />
              <Popup
                modal
                trigger={
                  <LogoutButton applyColor={isDarkMode}>Logout</LogoutButton>
                }
                className="logout-popup"
              >
                {close => (
                  <LogoutPopupContent applyColor={isDarkMode}>
                    <p>Are you sure, you want to logout</p>
                    <div>
                      <Button outline type="button" onClick={() => close()}>
                        Cancel
                      </Button>
                      <Button
                        bgColor="blue"
                        color="white"
                        type="button"
                        onClick={onClickLogout}
                      >
                        Confirm
                      </Button>
                    </div>
                  </LogoutPopupContent>
                )}
              </Popup>
            </LargeDivContainer>
          </NavbarContainer>
        )
      }}
    </ReactContext.Consumer>
  )
}
export default withRouter(Header)
