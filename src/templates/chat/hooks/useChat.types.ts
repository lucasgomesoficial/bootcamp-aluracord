export type ListMensagensData = {
  id: string
  name: string
  mensager: string
  created_at: string
}

export type useChatFactoryTypes = {
  userName?: string | string[]
  listMenssages?: ListMensagensData[]
  handleMsg: string
  setHandleMsg: (msg: string) => void
  handleNewMenssagem: (newMenssager: string) => void
}
