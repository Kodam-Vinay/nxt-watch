import styled from 'styled-components'

export const NavList = styled.ul`
  padding: 1px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto';
`
export const NavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  background-color: ${props => {
    const {applyColor} = props
    const color = applyColor ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  padding-left: 20px;
  margin-bottom: 10px;
`
export const Paragraph = styled.p`
  font-weight: 600;
  padding-left: 15px;
  text-decoration: none;
  color: ${props => (props.applyColor ? '#f9f9f9' : '#0f0f0f')};
  font-size: 16px;
`
