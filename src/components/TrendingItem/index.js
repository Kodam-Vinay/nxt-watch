import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NavMenuContext from '../../context/NavMenuContext'

import {
  TrendingItemContainer,
  ThumbnailImage,
  TextContainer,
  ChannelLogo,
  VideoTitle,
  VideoText,
  VideoTextContainer,
  VideoDetailsContainer,
  VideoDetailsContainer2,
} from './styledComponents'
import ReactContext from '../../context/ReactContext'

const TrendingItem = props => {
  const {videosList} = props
  const {id, publishedAt, title, viewCount, thumbnailUrl, channel} = videosList
  const {name, profileImageUrl} = channel
  let publishedDate = formatDistanceToNow(new Date(publishedAt)).split(' ')
  if (publishedDate.length === 3) {
    publishedDate.shift()
    publishedDate = publishedDate.join(' ')
  }

  const videoCard = val => {
    const {isDarkMode} = val
    return (
      <NavMenuContext.Consumer>
        {value => {
          const {onClickNavItem} = value
          return (
            <Link
              to={`/videos/${id}`}
              className="link"
              onClick={() => onClickNavItem('INITIAL')}
            >
              <TrendingItemContainer>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <TextContainer>
                  <div>
                    <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  </div>
                  <VideoTextContainer>
                    <VideoTitle applyColor={isDarkMode}>{title}</VideoTitle>
                    <VideoDetailsContainer>
                      <VideoText>{name}</VideoText>
                      <VideoDetailsContainer2>
                        <VideoText>{viewCount} views</VideoText>
                        <VideoText>{publishedDate} ago</VideoText>
                      </VideoDetailsContainer2>
                    </VideoDetailsContainer>
                  </VideoTextContainer>
                </TextContainer>
              </TrendingItemContainer>
            </Link>
          )
        }}
      </NavMenuContext.Consumer>
    )
  }

  return <ReactContext.Consumer>{val => videoCard(val)}</ReactContext.Consumer>
}
export default TrendingItem
