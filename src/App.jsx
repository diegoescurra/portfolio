import './App.css'
import { Home } from './components/Views/Home'
import {Navbar} from './components/shareds/navbar/Navbar'
import {Footer} from './components/shareds/footer/Footer'

function App() {

  return (
    <>
    <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
