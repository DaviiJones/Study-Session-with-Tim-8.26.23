import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstcomp from './components/firstcomp'
import Secondcomp from './components/secondcomp'
import Thirdcomp from './components/thirdcomp'
import Fourthcomp from './components/fourthcomp'
import Fifthcomp from './components/fifthcomp'

function App() {
  const [count, setCount] = useState(100)
  function handleClick () {
    setCount(count + 1)
  }
  const inform = () => {
    alert("Yeah Son")
  }
  return (
    <>
    <Firstcomp inform = {inform}
    handleClick = {handleClick}
    count = {count}/>
    <Firstcomp handleClick = {inform}
    number = {count}/>
      {count}
      
    </>
  )
}

export default App
