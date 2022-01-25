import React from 'react'
import { AppProps } from 'next/app'
import { FC } from 'react'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import { customTheme } from '../styles/theme'
import { Toaster } from 'react-hot-toast'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <Component {...pageProps} />
      <GlobalStyle />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </ThemeProvider>
  )
}

export default MyApp
