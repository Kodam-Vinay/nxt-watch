import styled from 'styled-components'

export const GamingItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 5px;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 33%;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    width: 25%;
    flex-direction: row;
  }
`
export const ThumbnailImage = styled.img`
  width: 100%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
  width: 100%;
`
export const VideoTextContainer = styled.div``

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
export const VideoDetailsText = styled.p`
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
  color: ${props => (props.applyColor ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`
