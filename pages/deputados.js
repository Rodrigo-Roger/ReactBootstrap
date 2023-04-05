import { useEffect, useState } from "react"
import apiDeputados from "../services/apiDeputados"

export default function Deputados() {

  const [deputados, setDeputados] = useState([])

  useEffect(() => {
    apiDeputados.get('deputados').then(resultado => {
      setDeputados(resultado.data.dados);
    })
  }, [])

  return (
    <>
      <h1>Deputados</h1>

      {deputados.map(item=>(
        <img title={item.nome} key={item.id} src={item.urlFoto} width="150px" />
      ))}
    </>
  )
}
