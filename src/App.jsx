import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import TIPage from './pages/TIPage'
import RHPage from './pages/RHPage'
import MarketingPage from './pages/MarketingPage'
import EngenhariaPage from './pages/EngenhariaPage'
import FinanceiroPage from './pages/FinanceiroPage'
import VendasPage from './pages/VendasPage'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rotas protegidas */}
        <Route path="/" element={
          <PrivateRoute>
            <>
              <Navbar />
              <Dashboard />
            </>
          </PrivateRoute>
        } />
        <Route path="/ti" element={
          <PrivateRoute>
            <>
              <Navbar />
              <TIPage />
            </>
          </PrivateRoute>
        } />
        <Route path="/rh" element={
          <PrivateRoute>
            <>
              <Navbar />
              <RHPage />
            </>
          </PrivateRoute>
        } />
        <Route path="/marketing" element={
          <PrivateRoute>
            <>
              <Navbar />
              <MarketingPage />
            </>
          </PrivateRoute>
        } />
        <Route path="/engenharia" element={
          <PrivateRoute>
            <>
              <Navbar />
              <EngenhariaPage />
            </>
          </PrivateRoute>
        } />
        <Route path="/financeiro" element={
          <PrivateRoute>
            <>
              <Navbar />
              <FinanceiroPage />
            </>
          </PrivateRoute>
        } />
        <Route path="/vendas" element={
          <PrivateRoute>
            <>
              <Navbar />
              <VendasPage />
            </>
          </PrivateRoute>
        } />
        <Route path="/perfil" element={
          <PrivateRoute>
            <>
              <Navbar />
              <Profile />
            </>
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App