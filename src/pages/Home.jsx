import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

function Home() {

  const [itens, setItens] = useState([])

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character'

    const response = await fetch(apiUrl)

    const body = await response.json()

    const results = body.results

    console.log('results',results)

    setItens(results)
  }

  useEffect(function() {
    carregarDados()
  }, [])

  return (
    <>
      <div className="cards">
        {/* Para cada um dos itens da lista, exibir um Card */}
        {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
      </div>
    </>
  )
}

export default Home