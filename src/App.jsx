import './App.css'
import { Home } from './components/Views/Home'
import {Navbar} from './components/shareds/navbar/Navbar'
import {Footer} from './components/shareds/footer/Footer'
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <>
    <Navbar />
      <Home />
      <Footer />
      <Analytics />
    </>
  )
}

export default App
