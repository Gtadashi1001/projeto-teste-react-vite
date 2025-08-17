import React from 'react';
import { Container, Typography, Paper, Box, Avatar, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      
      {/* Toolbar vazia para compensar o espaço da Navbar fixa */}
      <Toolbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar 
              sx={{ width: 100, height: 100, mb: 2, bgcolor: 'primary.main' }}
            >
              
            </Avatar>
            <Typography variant="h4">Meu Perfil</Typography>
          </Box>
          
          <Box mb={3}>
            <Typography variant="h6" gutterBottom>Informações Pessoais</Typography>
            <Typography variant="body1">Nome: João Silva</Typography>
            <Typography variant="body1">Email: joaosilva@gmail.com</Typography>
            <Typography variant="body1">Cargo: Analista de Dados</Typography>
            <Typography variant="body1">Departamento: Desenvolvimento</Typography>
          </Box>
          
          <Box>
            <Typography variant="h6" gutterBottom>Preferências</Typography>
            <Typography variant="body1">Tema: Claro</Typography>
            <Typography variant="body1">Notificações: Ativadas</Typography>
          </Box>
          
          <Box mt={3} display="flex" justifyContent="center">
            <Button 
              variant="contained" 
              color="error"
              onClick={handleLogout}
              sx={{
                width: '200px',
                borderRadius: '20px',
                textTransform: 'none',
                fontSize: '1rem'
              }}
            >
              Sair da Conta
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Profile;