import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.neutrals['800']};
  gap: 20px;
`

export const Header = styled.h5`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`

export const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`

export const Button = styled.button`
  width: 50px;
  height: 30px;
  border: none;
  border-radius: 10%;
  color: white;
  background: red;
  cursor: pointer;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px;
  background-color: ${props => props.theme.colors.neutrals['600']};
  border-radius: 5px;
  max-height: 70%;
  width: 50%;
`

export const Form = styled.form`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  border: 0;
  resize: none;
  border-radius: 5px;
  padding: 6px 8px;
  background-color: ${props => props.theme.colors.neutrals['800']};
  margin-right: 12px;
  color: ${props => props.theme.colors.neutrals['200']};
`
