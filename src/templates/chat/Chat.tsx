import { useRouter } from 'next/router'
import React, { ChangeEvent, FormEvent, JSXElementConstructor } from 'react'
import { CHAT_CONFIG } from './Chat.config'
import * as S from './Chat.styles'
import { ChatTemplateProps } from './Chat.types'
import { MenssangerList } from './components/menssangerList/Menssangerlist'
import { useChatFactory as defaultUseChatFactory } from './hooks/useChat'

export const ChatTemplate: JSXElementConstructor<
  ChatTemplateProps
> = ({
  useChatFactory = defaultUseChatFactory
}) => {
  const router = useRouter()
  const {
    handleMsg,
    userName,
    handleNewMenssagem,
    listMenssages,
    setHandleMsg
  } = useChatFactory()

  if (listMenssages === undefined) {
    return (
      <S.Container>
        <img
          src={CHAT_CONFIG.IMAGENS.LOADING.VALUE}
          alt={CHAT_CONFIG.IMAGENS.LOADING.ALT}
        />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>{CHAT_CONFIG.TITLE} {userName}</S.Title>
        <S.Button onClick={() => router.push('/')}>{CHAT_CONFIG.EXIT_BUTTON.VALUE}</S.Button>
      </S.Header>
      <S.Card>
        <MenssangerList menssagens={listMenssages} />
        <S.Form
          onSubmit={(e: FormEvent<Element>) => {
            e.preventDefault()
          }}
        >
          <S.Input
            type="text"
            value={handleMsg}
            placeholder="Mensagem"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setHandleMsg(e.target.value)
            }}
            onKeyPress={e => {
              if (e.key === 'Enter') {
                e.preventDefault()
                handleNewMenssagem(handleMsg)
              }
            }}
          />
        </S.Form>
      </S.Card>
    </S.Container>
  )
}
