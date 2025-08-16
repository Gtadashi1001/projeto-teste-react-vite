import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const bodyData = { email, password };
      console.log('Dados sendo enviados:', bodyData);
      
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      if (response.ok) {
        const data = await response.json();
        // Salvar o token no localStorage
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Erro do servidor:', errorData);
        alert(errorData.message || 'Erro ao fazer login');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao conectar com o servidor');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
        </div>
        <button type="submit">Entrar</button>
        <button 
          type="button" 
          onClick={() => navigate('/register')} 
          className="secondary-button"
        >
          Registre-se
        </button>
      </form>
    </div>
  );
};

export default Login;
