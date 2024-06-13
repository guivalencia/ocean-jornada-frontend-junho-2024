import './App.css'
import Card from './components/Card/Card'

function App() {
  // const item1 = {
  //   name: 'Rick Sanchez',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  // }

  // const item2 = {
  //   name: 'Morty Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  // }

  // const item3 = {
  //   name: 'Summer Smith',
  //   image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  // }

  // // // Listas (Arrays)
  // const itens = [item1, item2, item3]

  const itens = []

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character'

    // Promise significa um processo executando ao mesmo tempo
    // Esse processo pode levar um tempo, então precisamos aguardá-lo
    // Aguardar significa colocar o `await` ao lado
    // Assim que processo terminar, a variável `response` receberá
    // a resposta do API

    // Fetch é o pacote que usamos para acessar o conteúdo de URLs
    // que estão em algum lugar da internet
    const response = await fetch(apiUrl)

    const body = await response.json()

    console.log(body)
  }

  carregarDados()

  return (
    <>
      <div className="cards">
        {/* Para cada um dos itens da lista, exibir um Card */}
        {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
      </div>
    </>
  )
}

export default App