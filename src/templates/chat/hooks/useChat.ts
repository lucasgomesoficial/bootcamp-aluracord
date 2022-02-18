import { useRouter } from "next/router"
import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { gateway } from "../../../services/gateway/gateway"
import { ListMensagensData, useChatFactoryTypes } from "./useChat.types"

export const useChatFactory = (): useChatFactoryTypes => {
  const { query } = useRouter()
  const { userName } = query
  const [handleMsg, setHandleMsg] = useState('')
  const [listMenssages, setListMenssages] = useState<ListMensagensData[]>()

  const handleNewMenssagem = useCallback((newMenssager: string) => {
    const dataMenssanger = {
      name: userName,
      mensager: newMenssager
    }

    gateway.post('mensagens', dataMenssanger)
      .then((data) => {
        console.log('status:', data.status)
      })
      .catch((err) => {
        toast.error(`Deu ruim, erro: ${err}`)
      })

    setHandleMsg('')
  }, [])

  const showListMensagens = useCallback(() => {
    gateway.get('mensagens')
      .then(({data}) => {
        setListMenssages(data)
      })
      .catch((err) => {
        toast.error(`Deu ruim, erro: ${err}`)
      })
  }, [listMenssages])

  useEffect(() => {
    showListMensagens()
  }, [handleMsg])

  return {
    userName,
    listMenssages,
    handleMsg,
    setHandleMsg,
    handleNewMenssagem
  }
}
