import React, { JSXElementConstructor } from 'react'
import { MenssangerListProps } from './MenssangerList.types'
import * as S from './MenssangerList.styles'

export const MenssangerList: JSXElementConstructor<
  MenssangerListProps
> = ({
  menssagens
}) => {
  return (
    <S.Container>
      {menssagens?.map(({ id, name, mensager, created_at }) => {
        return (
          <S.Card key={id}>
            <div>
              <S.Image src={`https://github.com/${name}.png`} />
              <p>{name}</p>
              <S.DateMsg>{created_at}</S.DateMsg>
            </div>
            {mensager}
          </S.Card>
        )
      })}
    </S.Container>
  )
}
