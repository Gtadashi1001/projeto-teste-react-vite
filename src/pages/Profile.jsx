import React from 'react';
import { Container, Typography, Paper, Box, Avatar, Toolbar } from '@mui/material';
import Navbar from '../components/Navbar';

const Profile = () => {
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
        </Paper>
      </Container>
    </>
  );
};

export default Profile;