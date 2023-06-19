import styled from 'styled-components'

export const SavedBgContainer = styled.div`
  height: 100vh;
  background-color: ${props => (props.applyColor ? '#0f0f0f' : '#ffffff')};
  background-size: cover;
  display: flex;
  flex-direction: column;
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

export const NoVideosContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 10px;
`

export const NoVideosImg = styled.img`
  height: 180px;
  width: 200px;
  @media screen and (min-width: 768px) {
    height: 250px;
    width: 280px;
  }
`

export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  font-size: ${props => (props.para ? '14px' : '26px')};
  color: ${props => (props.applyColor ? '#f9f9f9' : '#181818')};
`

export const NavMainContainer = styled.div`
  width: 100%;
  padding: 10px;
  overflow-y: auto;
`

export const SavedVideosListContainer = styled.ul`
  height: 90%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`
