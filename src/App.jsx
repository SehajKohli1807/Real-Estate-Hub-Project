// import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Card from './Components/Cards'
import Logo from './Components/logos'
import Value from './Components/Value'
import Contacts from './Components/Contacts'
import GetStarted from './Components/GetStarted'
import Footer from './Components/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <div className="app">
      <Header />
      <Hero />
      <Logo />
      <Card />
      <Value />
      <Contacts />
      <GetStarted />
      <Footer />
     </div>
    </>
  )
}

export default App
