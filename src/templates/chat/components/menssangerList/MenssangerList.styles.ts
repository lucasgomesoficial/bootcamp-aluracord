import styled from 'styled-components'

export const Container = styled.ul`
  overflow: scroll;
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  color: ${props => props.theme.colors.neutrals['000']};
  gap: 10px;
  overflow-x: hidden;
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${props => props.theme.colors.neutrals['500']};
  width: 98%;
`

export const Image = styled.img`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
`

export const DateMsg = styled.span`
  font-size: 10px;
  margin-left: 8px;
  color: ${props => props.theme.colors.neutrals['300']};
`
