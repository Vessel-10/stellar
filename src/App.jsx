import { useState } from 'react';
import siteLogo from "../public/cruise.png" 
import Nav from './component/nav.jsx';
import Intro from './component/intro';
import FirstSection from './component/first-section';
import SecondSection from './component/second-section.jsx';
import './css/style.scss'
import './js/icons.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Intro />
      <FirstSection />
      <SecondSection />
    </>
  )
}

export default App
