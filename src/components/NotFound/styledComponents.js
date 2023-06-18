import styled from 'styled-components'

export const NotFoundBgContainer = styled.div`
  height: 100vh;
  background: ${props => (props.applyColor ? '#0f0f0f' : '#ebebeb')};
  display: flex;
  flex-direction: column;
`

export const DivContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageElement = styled.img`
  align-self: center;
  max-height: 300px;
  max-width: 300px;
  @media screen and (min-width: 768px) {
    max-height: 400px;
    max-width: 400px;
  }
`
export const Heading = styled.h1`
  margin-top: 30px;
  font-size: 24px;
  text-align: center;
  color: ${props => (props.applyColor ? '#ffffff' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const Paragraph = styled.p`
  font-size: 12px;
  margin-top: 0;
  text-align: center;
  color: ${props => (props.applyColor ? '#475569' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
