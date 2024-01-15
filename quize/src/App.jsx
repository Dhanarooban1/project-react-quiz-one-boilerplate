import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeComponent from './Component/HomeComponent';
import Quiz from './Component/Quiz';
import ResultComponent from './Component/ResultComponent';
function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    {/* <HomeComponent/> */}
        {/* <Quiz/>,  */}
       <ResultComponent/>
    </>
  )
}

export default App
