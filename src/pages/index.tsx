import React, { FC } from 'react'
import { BrowserTab } from '../components/browserTab/BrowserTab'
import { HomeTemplate } from '../templates/home/Home'

export default function Home() {
  return (
    <>
      <BrowserTab text='Home' />
      <HomeTemplate />
    </>
  )
}
