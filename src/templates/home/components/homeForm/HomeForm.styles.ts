import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 200px;
  text-align: center;
  margin-bottom: 32px;
`

export const Title = styled.h2`
  color: ${props => props.theme.colors.neutrals['000']};
  font-size: 24px;
  font-weight: 600;
`

export const Description = styled.p`
  color: ${props => props.theme.colors.neutrals['300']};
  margin-bottom: 32px;
`

export const Input = styled.input`
  width: 230px;
  height: 30px;
  outline: none;
  padding: 0 5px;
`

export const Button = styled.button`
  width: 230px;
  height: 30px;
  cursor: pointer;
  border: none;
  color: ${props => props.theme.colors.neutrals['000']};
  background-color: ${props => props.theme.colors.primary['400']};

  &:hover {
    background-color: ${props => props.theme.colors.primary['600']};
  }
`
