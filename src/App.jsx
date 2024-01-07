import './App.css'

import Header from "./Components/Global/Header/Header"
import BannerPrincipal from './Components/Pages/Home/BannerPrincipal/BannerPrincipal'
import SectionComparador from './Components/Pages/Home/SectionComparador/SectionComparador'
import Lancamentos from './Components/Pages/Home/Lancamentos/Lancamentos'

function App() {

  return (
    <>
      <Header />
      <BannerPrincipal />
      <SectionComparador />
      <Lancamentos />
    </>
  )
}

export default App
