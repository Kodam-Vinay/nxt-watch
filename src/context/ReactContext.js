import React from 'react'

const ReactContext = React.createContext({
  isDarkMode: false,
  onClickThemeIcon: () => {},
})
export default ReactContext
