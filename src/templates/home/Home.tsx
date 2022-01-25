import { useRouter } from 'next/router'
import React, { ChangeEvent, FC, useState } from 'react'
import toast from 'react-hot-toast'
import { BrowserTab } from '../../components/browserTab/BrowserTab'
import { HOME_CONFIG } from './Home.config'
import * as S from './Home.styles'

export const HomeTemplate: FC = () => {
  const [userName, setUserName] = useState('')
  const router = useRouter()
  return (
    <S.Container>
      <BrowserTab text={'Acessar'} />
      <S.Card>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault()
            userName.length > 1 ? (
              router.push('/chat')
            ) : (
              toast('Digite um usuário!', {
                icon: '⚠',
              })
            )
          }}
        >
          <div>
            <S.Title>{HOME_CONFIG.TITLE}</S.Title>
            <S.Description>{HOME_CONFIG.DECRIPTION}</S.Description>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
            <S.Input
              type="text"
              value={userName}
              placeholder='Digite um usuário'
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setUserName(e.target.value)
              }}
            />
            <S.Button>{HOME_CONFIG.ACCESS_BUTTON.VALUE}</S.Button>
          </div>
        </S.Form>
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
