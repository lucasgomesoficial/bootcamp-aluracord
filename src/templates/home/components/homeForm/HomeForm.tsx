import { useRouter } from 'next/router'
import React, { ChangeEvent, FormEvent, JSXElementConstructor } from 'react'
import toast from 'react-hot-toast'
import { HOME_FORM_CONFIG } from './HomeForm.config'
import * as S from './HomeForm.styles'
import { HomeFormProps } from './HomeForm.types'

export const HomeForm: JSXElementConstructor<
  HomeFormProps
> = ({
  userName,
  setUserName
}) => {
  const router = useRouter()
  return (
    <S.Form
      onSubmit={(e: FormEvent<Element>) => {
        e.preventDefault()
        userName.length > 1 ? (
          router.push({
            pathname: '/chat/[userName]',
            query: { userName: userName },
          })
        ) : (
          toast('Digite um usuário!', {
            icon: '⚠',
          })
        )
      }}
    >
      <S.HeaderForm>
        <S.Title>{HOME_FORM_CONFIG.TITLE}</S.Title>
        <S.Description>{HOME_FORM_CONFIG.DECRIPTION}</S.Description>
      </S.HeaderForm>
      <S.InputForm>
        <S.Input
          type="text"
          value={userName}
          placeholder='Digite um usuário'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value)
          }}
        />
        <S.Button>{HOME_FORM_CONFIG.ACCESS_BUTTON.VALUE}</S.Button>
      </S.InputForm>
    </S.Form>
  )
}
