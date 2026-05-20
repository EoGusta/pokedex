import {Route, Routes} from 'react-router-dom'
import Cabecalho from './components/Cabecalho'
import PokeNav from './components/PokeNav'
import PokeList from './components/PokeList'
import Rodape from './components/Rodape'
import InicioPagina from './paginas/InicioPagina'
import PokemonDetailPage from './paginas/PokemonDetailPage'
import SobrePagina from './paginas/SobrePagina'
import './App.css'

function App() {
return (
  <div>
    <Cabecalho />
    <PokeNav />
    <main>
      <Routes>
        <Route path='/' element={<InicioPagina />} />
        <Route path='/pokemon' element={<PokeList />} />
        <Route path='/pokemon/:id' element={<PokemonDetailPage />} />
        <Route path='/sobre' element={<SobrePagina />} />
      </Routes>
    </main>
    <Rodape />
  </div>
)

}

export default App

