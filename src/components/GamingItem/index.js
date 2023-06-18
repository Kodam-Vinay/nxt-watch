import {Link} from 'react-router-dom'
import {
  GamingItemContainer,
  ThumbnailImage,
  TextContainer,
  VideoDetailsText,
  VideoTextContainer,
  VideoTitle,
  VideoDetailsContainer,
} from './styledComponents'

import ReactContext from '../../context/ReactContext'
import NavMenuContext from '../../context/NavMenuContext'

const GamingItem = props => {
  const {videosList} = props
  const {id, thumbnailUrl, title, viewCount} = videosList

  const gamingCard = val => {
    const {isDarkMode} = val
    return (
      <NavMenuContext.Consumer>
        {value => {
          const {onClickNavItem} = value
          return (
            <GamingItemContainer>
              <Link
                to={`/videos/${id}`}
                className="link"
                onClick={() => onClickNavItem('INITIAL')}
              >
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <TextContainer>
                  <VideoTextContainer>
                    <VideoTitle applyColor={isDarkMode}>{title}</VideoTitle>
                    <VideoDetailsContainer>
                      <VideoDetailsText>
                        {viewCount} Watching Worldwide
                      </VideoDetailsText>
                    </VideoDetailsContainer>
                  </VideoTextContainer>
                </TextContainer>
              </Link>
            </GamingItemContainer>
          )
        }}
      </NavMenuContext.Consumer>
    )
  }

  return <ReactContext.Consumer>{val => gamingCard(val)}</ReactContext.Consumer>
}

export default GamingItem
