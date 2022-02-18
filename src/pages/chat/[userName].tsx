import React, { FC } from 'react'
import { BrowserTab } from '../../components/browserTab/BrowserTab'
import { ChatTemplate } from '../../templates/chat/Chat'

export default function Chat() {
  return (
    <>
      <BrowserTab text='Chat' />
      <ChatTemplate />
    </>
  )
}
