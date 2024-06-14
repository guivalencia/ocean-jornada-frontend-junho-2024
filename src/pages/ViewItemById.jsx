import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './ViewItemById.css'

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
    <div className="view_item">
      <Link to="/">Voltar para Home</Link>
      <h1>{item.name}</h1>

      <div className="content">
        <div>Imagem</div>
        <div>Texto</div>
      </div>
    </div>
    </>
  )
}

export default ViewItemById