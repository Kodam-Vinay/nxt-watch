import React from 'react'

const NavMenuContext = React.createContext({
  activeNavItem: 'INITIAL',
  onClickNavItem: () => {},
})
export default NavMenuContext
