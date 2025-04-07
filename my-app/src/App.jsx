import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import LoginPage from './components/login'
import Home from './components/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/home" element={<Home/>}> </Route>
      </Routes>
    </Router>
    
    </>
  )
}

export default App
