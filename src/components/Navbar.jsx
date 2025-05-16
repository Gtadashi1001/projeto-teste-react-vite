import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate, useLocation } from 'react-router-dom';
import { pieChartData } from '../data/mockData';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElDepartments, setAnchorElDepartments] = useState(null);
  const [anchorElProfile, setAnchorElProfile] = useState(null);
  
  const handleDepartmentMenuOpen = (event) => {
    setAnchorElDepartments(event.currentTarget);
  };

  const handleDepartmentMenuClose = () => {
    setAnchorElDepartments(null);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorElProfile(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorElProfile(null);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleProfileMenuClose();
  };

  const handleDepartmentClick = (department) => {
    console.log(`Selecionado departamento: ${department}`);
    handleDepartmentMenuClose();
  };

  const handleDashboardClick = () => {
    navigate('/');
  };

  // Verifica se estamos na página inicial
  const isHomePage = location.pathname === '/';

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDepartmentMenuOpen}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        
        <Menu
          id="department-menu"
          anchorEl={anchorElDepartments}
          open={Boolean(anchorElDepartments)}
          onClose={handleDepartmentMenuClose}
          MenuListProps={{
            'aria-labelledby': 'department-button',
          }}
        >
          {pieChartData.labels.map((department, index) => (
            <MenuItem 
              key={index} 
              onClick={() => handleDepartmentClick(department)}
              sx={{ 
                color: 'inherit',
                '&::before': {
                  content: '""',
                  display: 'inline-block',
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: pieChartData.datasets[0].backgroundColor[index],
                  marginRight: 1
                }
              }}
            >
              {department}
            </MenuItem>
          ))}
        </Menu>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard de Gráficos
        </Typography>
        
        {/* Botão para voltar ao dashboard principal - só aparece quando não estamos na página inicial */}
        {!isHomePage && (
          <Button 
            color="inherit" 
            startIcon={<HomeIcon />} 
            onClick={handleDashboardClick}
            sx={{ mr: 2 }}
          >
            Dashboard
          </Button>
        )}
        
        <Box>
          <IconButton
            color="inherit"
            onClick={handleProfileMenuOpen}
            aria-label="perfil do usuário"
          >
            <AccountCircleIcon />
          </IconButton>
          
          <Menu
            id="profile-menu"
            anchorEl={anchorElProfile}
            open={Boolean(anchorElProfile)}
            onClose={handleProfileMenuClose}
            MenuListProps={{
              'aria-labelledby': 'profile-button',
            }}
          >
            <MenuItem onClick={handleProfileClick}>Meu Perfil</MenuItem>
            <MenuItem onClick={handleProfileMenuClose}>Sair</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;