import { useState, useEffect} from 'react'
import Produto from './components/Produto'


function App() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    console.log("Buscando dados")
    fetch('https://dummyjson.com/products/1')
      .then(resp => {
        comsole.log("Os dados chegaram")
        if(resp.ok) {
          return resp.json()
        }
        throw new Error("Algo deu errado")
      })
      .then(dados => setProdutos(dados))
      .catch(e => console.error(e))

   }, [])
  return (
    <>
      Produto
    </>
  )
}

export default App
