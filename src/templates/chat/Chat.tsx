import { useRouter } from 'next/router'
import React, { ChangeEvent, FC, FormEvent } from 'react'
import * as S from './Chat.styles'
import { MenssangerList } from './components/menssangerList/Menssangerlist'
import { useChatFactory } from './hooks/useChat'

export const ChatTemplate: FC = () => {
  const router = useRouter()
  const {
    handleMsg,
    handleNewMenssagem,
    listMenssages,
    setHandleMsg
  } = useChatFactory()

  return (
    <S.Container>
      <S.Header>
        <S.Title>Chat</S.Title>
        <S.Button onClick={() => router.push('/')}>Sair</S.Button>
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
