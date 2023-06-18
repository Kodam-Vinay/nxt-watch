import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.applyColor ? '#181818' : '#f9f9f9')};
  background-size: cover;
  display: flex;
  flex-direction: column;
`
export const DivContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`

export const BannerSection = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 200px;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
`

export const WebsiteLogo = styled.img`
  height: 35px;
  width: 120px;
  align-self: center;
`
export const BannerPara = styled.p`
  color: #181818;
  font-weight: 600;
`
export const GetItButton = styled.button`
  background: transparent;
  border: 1px solid #181818;
  color: #181818;
  height: 30px;
  width: 100px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`
export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  align-self: flex-end;
  cursor: pointer;
  outline: none;
`

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
export const BannerAndResult = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const InputElement = styled.input`
  width: 90%;
  height: 35px;
  border: ${props =>
    props.applyColor ? '1px solid #f9f9f9' : '1px solid #181818 '};
  outline: none;
  padding: 5px;
  color: ${props => (props.applyColor ? '#f9f9f9' : '#181818')};
  background-color: ${props => (props.applyColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const SearchButton = styled(GetItButton)`
  height: 35px;
  background: transparent;
  cursor: pointer;
  outline: none;
  border: ${props =>
    props.applyColor ? '1px solid #f9f9f9' : '1px solid #181818 '};
  background: ${props => (props.applyColor ? '#231f20' : '#f8fafc ')};
`

export const VideosListContainer = styled.ul`
  overflow-y: auto;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`

export const NoVideosContainer = styled(FailureContainer)`
  overflow-y: auto;
`

export const NoVideosImg = styled(FailureImg)``
