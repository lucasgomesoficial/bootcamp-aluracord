import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { gateway } from "../../../services/gateway/gateway"

export const useChatFactory = () => {
  const [handleMsg, setHandleMsg] = useState('')
  const [listMenssages, setListMenssages] = useState([])

  const handleNewMenssagem = useCallback((newMenssager: string) => {
    const dataMenssanger = {
      name: 'vanessametonini',
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
    listMenssages,
    handleMsg,
    setHandleMsg,
    handleNewMenssagem
  }
}
