import React from 'react'
import Head from 'next/head'

type browserTabProps = {
  text: string
}

export const BrowserTab = ({ text }: browserTabProps) => {
  return (
    <Head>
      <title>{text}</title>
    </Head>
  )
}
