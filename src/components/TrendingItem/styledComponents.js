import styled from 'styled-components'

export const TrendingItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    padding: 5px;
    flex-direction: row;
  }
`

export const ThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
  width: 100%;
`
export const ChannelLogo = styled.img`
  width: 40px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoTextContainer = styled.div`
  margin-left: 10px;
`

export const VideoText = styled.p`
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  color: #475569;
  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  font-weight: 500;
  text-decoration: none;
  &:active {
    text-decoration: none;
  }
  font-family: Roboto;
  color: ${props => (props.applyColor ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`
