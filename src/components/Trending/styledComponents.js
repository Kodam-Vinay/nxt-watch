import styled from 'styled-components'

export const TrendingBgContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.applyColor ? '#000000' : '#ffffff')};
  background-size: cover;
  display: flex;
  flex-direction: column;
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

export const DivContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
`

export const NavElementContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  background-color: ${props => (props.applyColor ? '#424242' : '#f8fafc')};
  padding: 10px;
  margin-bottom: 10px;
`
export const NavItem = styled.div`
  padding: 10px;
  border-radius: 40px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: ${props => (props.applyColor ? '#0f0f0f' : '#e2e8f0')};
`

export const Paragraph = styled.p`
  font-weight: 600;
  padding-left: 15px;
  text-decoration: none;
  color: ${props => (props.applyColor ? '#f9f9f9' : '#0f0f0f')};
  font-size: ${props => (props.heading ? '30px' : '16px')};
  font-weight: ${props => (props.heading ? '700' : '500')};
`
export const NavMainContainer = styled.div`
  width: 100%;
  padding: 10px;
  overflow-y: auto;
`

export const TrendingVideosListContainer = styled.ul`
  height: 90%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`
