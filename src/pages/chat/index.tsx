import React, { FC } from 'react'
import { BrowserTab } from '../../components/browserTab/BrowserTab'
import { ChatTemplate } from '../../templates/chat/Chat'

const Chat: FC = () => {
  return (
    <>
      <BrowserTab text='Chat' />
      <ChatTemplate />
    </>
  )
}

export default Chat
