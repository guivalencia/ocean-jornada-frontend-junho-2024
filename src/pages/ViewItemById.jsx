import { useEffect, useState } from 'react'

function ViewItemById() {

  const [item, setItens] = useState([])

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/1'

    const response = await fetch(apiUrl)

    const body = await response.json()

    setItens(body)
  }

  useEffect(function() {
    carregarDados()
  }, [])

  if(!item){
    return <div>Carregando...</div>
  }

  return (
    <>
      <h1>{item.name}</h1>
    </>
  )
}

export default ViewItemById