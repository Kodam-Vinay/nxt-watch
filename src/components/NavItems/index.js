import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiMenuAddLine} from 'react-icons/ri'

import ReactContext from '../../context/ReactContext'
import NavMenuContext from '../../context/NavMenuContext'
import {NavList, NavItem, Paragraph} from './styledComponents'
import './index.css'

const constActiveNavItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

const NavItems = () => {
  const menuList = value => {
    const {isDarkMode} = value

    return (
      <NavMenuContext.Consumer>
        {values => {
          const {onClickNavItem, activeNavItem} = values
          const iconColor = isDarkMode ? '#424242' : '#7e858e'
          const iconActive = '#ff0b37'
          return (
            <NavList>
              <Link to="/" className="link-item">
                <NavItem
                  applyColor={isDarkMode}
                  isActive={activeNavItem === constActiveNavItems.home}
                  onClick={() => onClickNavItem(constActiveNavItems.home)}
                >
                  <AiFillHome
                    size={40}
                    color={
                      activeNavItem === constActiveNavItems.home
                        ? iconActive
                        : iconColor
                    }
                  />
                  <Paragraph applyColor={isDarkMode}>Home</Paragraph>
                </NavItem>
              </Link>

              <Link to="/trending" className="link-item">
                <NavItem
                  applyColor={isDarkMode}
                  isActive={activeNavItem === constActiveNavItems.trending}
                  onClick={() => onClickNavItem(constActiveNavItems.trending)}
                >
                  <AiFillFire
                    size={40}
                    color={
                      activeNavItem === constActiveNavItems.trending
                        ? iconActive
                        : iconColor
                    }
                  />
                  <Paragraph applyColor={isDarkMode}>Trending</Paragraph>
                </NavItem>
              </Link>
              <Link to="/gaming" className="link-item">
                <NavItem
                  applyColor={isDarkMode}
                  isActive={activeNavItem === constActiveNavItems.gaming}
                  onClick={() => onClickNavItem(constActiveNavItems.gaming)}
                >
                  <IoLogoGameControllerB
                    size={40}
                    color={
                      activeNavItem === constActiveNavItems.gaming
                        ? iconActive
                        : iconColor
                    }
                  />
                  <Paragraph applyColor={isDarkMode}>Gaming</Paragraph>
                </NavItem>
              </Link>
              <Link to="/saved-videos" className="link-item">
                <NavItem
                  applyColor={isDarkMode}
                  isActive={activeNavItem === constActiveNavItems.savedVideos}
                  onClick={() =>
                    onClickNavItem(constActiveNavItems.savedVideos)
                  }
                >
                  <RiMenuAddLine
                    size={40}
                    color={
                      activeNavItem === constActiveNavItems.savedVideos
                        ? iconActive
                        : iconColor
                    }
                  />
                  <Paragraph applyColor={isDarkMode}>Saved videos</Paragraph>
                </NavItem>
              </Link>
            </NavList>
          )
        }}
      </NavMenuContext.Consumer>
    )
  }
  return (
    <ReactContext.Consumer>{value => menuList(value)}</ReactContext.Consumer>
  )
}

export default NavItems
