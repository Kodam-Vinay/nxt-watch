import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ReactContext from './context/ReactContext'
import NavMenuContext from './context/NavMenuContext'
import VideoItemDetails from './components/VideoItemDetails'
import SavedVideosContext from './context/SavedVideosContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'

const constActiveNavItems = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    isDarkMode: false,
    activeNavItem: constActiveNavItems.home,
    savedVideosList: [],
    save: false,
  }

  onClickThemeIcon = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onClickNavItem = value => {
    this.setState({activeNavItem: value})
  }

  addVideosToSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  deleteVideosFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const filterData = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: filterData})
  }

  updateSaveVideosList = videoDetails => {
    const {save} = this.state
    if (save) {
      this.deleteVideosFromSavedVideos(videoDetails)
    } else {
      this.addVideosToSavedVideos(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(
      prev => ({save: !prev.save}),
      this.updateSaveVideosList(videoDetails),
    )
  }

  render() {
    const {isDarkMode, activeNavItem, save, savedVideosList} = this.state
    return (
      <ReactContext.Provider
        value={{
          isDarkMode,
          onClickThemeIcon: this.onClickThemeIcon,
        }}
      >
        <SavedVideosContext.Provider
          value={{
            save,
            savedVideosList,
            addVideosToSavedVideos: this.addVideosToSavedVideos,
            deleteVideosFromSavedVideos: this.deleteVideosFromSavedVideos,
            updateSave: this.updateSave,
          }}
        >
          <NavMenuContext.Provider
            value={{
              onClickNavItem: this.onClickNavItem,
              activeNavItem,
            }}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemDetails}
              />
              <Route path="/not-found" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </NavMenuContext.Provider>
        </SavedVideosContext.Provider>
      </ReactContext.Provider>
    )
  }
}
export default App
