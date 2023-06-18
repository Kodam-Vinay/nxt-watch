import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NavMenuContext from '../../context/NavMenuContext'
import ReactContext from '../../context/ReactContext'
import './index.css'

import {
  VideoListItem,
  ThumbnailImage,
  VideoInfoContainer,
  ChannelLogoImage,
  VideoTextContainer,
  VideoTitle,
  VideoDetailsContainer,
  VideoDetailsText,
  VideoDetailsContainer2,
} from './styledComponents'

const HomeData = props => {
  const {videosList} = props
  const {
    id,
    channelName,
    channelLogo,
    publishedAt,
    title,
    viewCount,
    thumbnailUrl,
  } = videosList
  let postedDate = formatDistanceToNow(new Date(publishedAt)).split(' ')
  if (postedDate.length === 3) {
    postedDate.shift()
    postedDate = postedDate.join(' ')
  }
  const contextVal = value => {
    const {isDarkMode} = value
    return (
      <NavMenuContext.Consumer>
        {val => {
          const {onClickNavItem} = val
          return (
            <VideoListItem>
              <Link
                to={`videos/${id}`}
                className="link"
                onClick={() => onClickNavItem('INITIAL')}
              >
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
                <VideoInfoContainer>
                  <div>
                    <ChannelLogoImage src={channelLogo} alt="channel logo" />
                  </div>
                  <VideoTextContainer>
                    <VideoTitle applyColor={isDarkMode}>{title}</VideoTitle>
                    <VideoDetailsContainer>
                      <VideoDetailsText channelName>
                        {channelName}
                      </VideoDetailsText>
                      <VideoDetailsContainer2>
                        <VideoDetailsText>{viewCount} views </VideoDetailsText>
                        {/* <VideoDetailsText dot> . </VideoDetailsText> */}
                        <VideoDetailsText as="p">
                          {postedDate} ago
                        </VideoDetailsText>
                      </VideoDetailsContainer2>
                    </VideoDetailsContainer>
                  </VideoTextContainer>
                </VideoInfoContainer>
              </Link>
            </VideoListItem>
          )
        }}
      </NavMenuContext.Consumer>
    )
  }

  return (
    <ReactContext.Consumer>{value => contextVal(value)}</ReactContext.Consumer>
  )
}
export default HomeData
