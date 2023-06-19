import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Card from './Components/Cards'
import Logo from './Components/logos'
import Value from './Components/Value'
import Contacts from './Components/Contacts'
import GetStarted from './Components/GetStarted'

function App() {
  const [count, setCount] = useState(0)

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
     </div>
    </>
  )
}

export default App
