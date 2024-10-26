import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import HomePage from './pages/HomePage'
import './App.css'
import HomePage from './components/HomePage'
import Button from './components/Button'

function App() {
  return (
    <>
      <HomePage />
      <Button />
    </>
  );
}

export default App
