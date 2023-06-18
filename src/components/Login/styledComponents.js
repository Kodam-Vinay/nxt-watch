import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.changeColor ? '#181818' : 'transparent')};
`
export const FormContainer = styled.form`
  height: 370px;
  width: 300px;
  box-shadow: ${props =>
    props.changeColor ? '2px 2px 2px 2px #000000' : '2px 2px 2px 2px #cccccc'};
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  background-color: ${props =>
    props.changeColor ? ' #000000' : 'transparent'};
`
export const ImageElement = styled.img`
  height: 40px;
  width: 120px;
  align-self: center;
  margin-bottom: 20px;
`
export const EachInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const LabelElement = styled.label`
  color: ${props => (props.changeColor ? '#f9f9f9' : '#64748b')};
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 14px;
`

export const InputElement = styled.input`
  height: 35px;
  width: ${props => (props.checkbox ? '15px' : '')};
  border: ${props =>
    props.changeColor ? '1px solid #cbd5e1' : '1px solid #e2e8f0'};
  border-radius: 3px;
  outline: none;
  color: ${props => (props.changeColor ? '#f9f9f9' : '#64748b')};
  background: transparent;
  padding: 10px;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LoginButton = styled.button`
  background: #3b82f6;
  height: 35px;
  margin-top: 10px;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`
export const ShowError = styled.p`
  color: ${props => (props.changeColor ? '#ff0000' : '#ff0b37')};
  font-size: 13px;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 600;
`
