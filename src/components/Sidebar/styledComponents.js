import styled from 'styled-components'

export const DivContainer = styled.div`
  padding-top: 10px;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
  height: 100%;
  background-color: ${props => (props.applyColor ? '#212121' : '#f4f4f4')};
  font-family: 'Roboto';
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactUsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

export const Paragraph = styled.p`
  font-weight: 600;
  color: ${props => (props.applyColor ? '#f4f4f4' : '#212121')};
`
export const LogosContainer = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 5px;
`

export const Logo = styled.img`
  height: 30px;
`
