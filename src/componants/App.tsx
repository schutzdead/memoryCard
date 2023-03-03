import './styles/App.css'
import { Header } from './header'
import { Body } from './body'
import { useEffect, useState } from 'react'

export function App() {
 
  const [currentScore, setCurrentScore] = useState(0)
  const [bestScore, setBestScore]:any = useState(localStorage.getItem('BestScore'))

  useEffect(() => {
    localStorage.setItem('BestScore', bestScore)

    return () => {
      localStorage.removeItem('BestScore')
    }
  }, [bestScore]);

  return (
    <div className="container">
      <Header score={currentScore} bestScore={bestScore}/>
      <Body score={setCurrentScore} bestScore={setBestScore} currentScore={currentScore}/>
    </div>
  )
}

