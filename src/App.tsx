import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { Footer } from './components/Footer'
import { Content } from './components/Content'
import './App.sass'
import './styles/main.sass'

function App() {
  return (
    <>
      <Header></Header>
      <SearchBar></SearchBar>
      <Content></Content>
      <Footer></Footer>
    </>
  )
}

export default App
