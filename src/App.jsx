import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import TIPage from './pages/TIPage'
import RHPage from './pages/RHPage'
import MarketingPage from './pages/MarketingPage'
import EngenhariaPage from './pages/EngenhariaPage'
import FinanceiroPage from './pages/FinanceiroPage'
import VendasPage from './pages/VendasPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/ti" element={<TIPage />} />
          <Route path="/rh" element={<RHPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/engenharia" element={<EngenhariaPage />} />
          <Route path="/financeiro" element={<FinanceiroPage />} />
          <Route path="/vendas" element={<VendasPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App