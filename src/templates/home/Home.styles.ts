import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.neutrals['800']};
`

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 700px;
  border-radius: 5px;
  padding: 32px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
  background-color: ${props => props.theme.colors.neutrals['700']};
`

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

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  max-width: 200px;
  padding: 16px;
  background-color: ${props => props.theme.colors.neutrals['800']};
  border: 1px solid ${props => props.theme.colors.neutrals['999']};
  border-radius: 10px;
  min-height: 240px;
`

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 16px;
`

export const TextImg = styled.p`
  color: ${props => props.theme.colors.neutrals['200']};
  background-color: ${props => props.theme.colors.neutrals['900']};
  padding: 3px 10px;
  border-radius: 1000px;
`
