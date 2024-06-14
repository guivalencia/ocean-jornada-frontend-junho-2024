import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ViewItemById() {

  const [item, setItens] = useState([])

  const { itemId } = useParams()

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character/' + itemId

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
    <div className="cards">
      <h1>{item.name}</h1>
    </div>
    </>
  )
}

export default ViewItemById