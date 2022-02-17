import React, { FC, useState } from 'react'
import { BrowserTab } from '../../components/browserTab/BrowserTab'
import { HomeForm } from './components/homeForm/HomeForm'
import * as S from './Home.styles'

export const HomeTemplate: FC = () => {
  const [userName, setUserName] = useState('')
  return (
    <S.Container>
      <BrowserTab text={'Acessar'} />
      <S.Card>
        <HomeForm
          userName={userName}
          setUserName={setUserName}
        />
        <S.Perfil>
          <S.Image src={`https://github.com/${userName || 'github'}.png`} alt="" />
          {userName ? (
            <S.TextImg>{userName}</S.TextImg>
            ) : (
            <S.TextImg>github</S.TextImg>
          )}
        </S.Perfil>
      </S.Card>
    </S.Container>
  )
}
