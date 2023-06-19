import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  height: 10vh;
  background-color: ${props => (props.applyColor ? '#212121' : '#f4f4f4')};
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`

export const ImageElement = styled.img`
  width: 100px;
  @media screen and (min-width: 768px) {
    width: ${props => (props.profileImage ? '30px' : '120px')};
    margin-left: 10px;
  }
`
export const DivContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: block;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DarkModeButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`
export const LargeDivContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`
export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid #3b82f6;
  cursor: pointer;
  outline: none;
  height: 30px;
  width: 80px;
  color: #3b82f6;
  font-weight: 600;
  margin-left: 15px;
`
export const NavItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  background: ${props => (props.applyColor ? '#181818' : '#ebebeb')};
  width: 100%;
  padding-top: 20px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItemsList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LogoutPopupContent = styled.div`
  background: ${props => (props.applyColor ? '#0f0f0f' : '#f1f1f1')};
  border-radius: 8px;
  width: 300px;
  height: 150px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.applyColor ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 150px;
  }
`

export const Button = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  width: 80px;
  height: 35px;
  margin: 5px;
  color: ${props => (props.outline ? '#3b82f6' : 'white')};
  border-radius: 5px;
  outline: none;
  border: 1px solid #3b82f6;
  cursor: pointer;
  outline: none;
`

export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  align-self: flex-end;
`
