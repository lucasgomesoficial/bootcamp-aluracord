/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components'

import { customTheme } from './theme'

export type Theme = typeof customTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
