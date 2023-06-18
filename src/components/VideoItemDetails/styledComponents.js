import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background: ${props => (props.applyColor ? '#0f0f0f' : '#ebebeb')};
`
export const VideoDetailsContainer = styled.div`
  height: 90%;
  display: flex;
`

// home code copied
export const LoaderContainer = styled.div`
  margin: auto;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
  overflow-y: auto;
`

export const FailureImg = styled.img`
  height: 180px;
  width: 180px;
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 250px;
  }
`

export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  font-size: ${props => (props.para ? '14px' : '26px')};
  color: ${props => (props.applyColor ? '#f9f9f9' : '#181818')};
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
  margin-top: 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`

export const VideoAndDetails = styled.div`
  width: 100%;
  padding: 10px;
  background-color: ${props => (props.applyColor ? '#181818' : '#f9f9f9')};
`
export const PlayerContainer = styled.div`
  height: 50vh;
  width: 100%;
`

export const VideoTitle = styled.p`
  margin: 0px;
  margin-top: 8px;
  font-size: 24px;
  color: ${props => (props.applyColor ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const LikesAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: #475569;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
`

export const ViewsAndPostedContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ViewsText = styled.p`
  margin: 0px 10px 0px 0px;
`
export const LikesAndSaveContainer = styled.div`
  display: flex;
  align-items: center;
`

export const EachButton = styled.button`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  font-weight: 500;
  font-size: 14px;
  padding: 0px;
  margin-right: 10px;
  margin-top: 10px;
  padding-bottom: 10px;
  color: ${props => (props.applyColor ? '#2563eb' : '#64748b')};
`

export const ChannelLogo = styled.img`
  width: 50px;
`

export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`

export const ChannelDetailsText = styled.p`
  margin: 0px;
  padding-left: 15px;
  color: ${props => (props.applyColor ? '#ffffff' : '#0f0f0f')};
`
export const ChannelDetailsText2 = styled(ChannelDetailsText)`
  color: #64748b;
`
export const VideoDescriptionText = styled.p`
  color: ${props => (props.applyColor ? '#ffffff' : '#0f0f0f')};
  margin-bottom: 20px;
`
