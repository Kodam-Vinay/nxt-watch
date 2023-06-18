import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 50%;
    padding: 5px;
    height: 350px;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
    padding: 5px;
    height: 100%;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
`
export const ChannelLogoImage = styled.img`
  width: 40px;
  margin-right: 10px;
`

export const VideoTitle = styled.p`
  margin-top: 0;
  color: ${props => (props.applyColor ? '#ffffff' : '#0f0f0f')};
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 5px;
`
export const VideoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoDetailsText = styled.p`
  color: #475569;
  font-size: ${props => (props.dot ? '30px' : '15px')};
  margin-top: ${props => (props.dot ? '-15px' : '0')};
  margin-bottom: 2px;
`

export const VideoDetailsContainer2 = styled.div`
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
