import React, { useState, useRef, useEffect } from 'react';
import { Container, Box, Paper, Typography, Toolbar } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { pieChartData, barChartData } from '../data/mockData';
import Navbar from '../components/Navbar';

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pieChartRef = useRef(null);
  
  // Definir uma categoria padrão ao carregar o componente
  useEffect(() => {
    if (!selectedCategory && pieChartData.labels.length > 0) {
      setSelectedCategory(pieChartData.labels[0]);
    }
  }, [selectedCategory]);

  const handlePieClick = (event, elements) => {
    if (elements && elements.length > 0) {
      const clickedIndex = elements[0].index;
      setSelectedCategory(pieChartData.labels[clickedIndex]);
    }
  };

  return (
    <>
      <Navbar />
      {/* Toolbar vazia para compensar o espaço da Navbar fixa */}
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'space-between' }}>
          {/* Gráfico de Pizza */}
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
              width: { xs: '100%', md: '48%' },
              minWidth: 300
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              Distribuição por Departamento
            </Typography>
            <Box sx={{ flex: 1, position: 'relative' }}>
              <Pie 
                ref={pieChartRef}
                data={pieChartData} 
                options={{
                  onClick: handlePieClick,
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      position: 'bottom',
                    },
                    tooltip: {
                      enabled: true,
                      callbacks: {
                        label: function(context) {
                          const label = context.label || '';
                          const value = context.raw || 0;
                          return `${label}: ${value}%`;
                        }
                      }
                    }
                  },
                  onHover: (event, chartElement) => {
                    if (event.native) {
                      event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                    }
                  },
                }}
              />
            </Box>
          </Paper>
          
          {/* Gráfico de Barras */}
          <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column',
              height: 400,
              width: { xs: '100%', md: '48%' },
              minWidth: 300
            }}
          >
            <Typography variant="h6" gutterBottom component="div">
              {selectedCategory ? `Detalhes de ${selectedCategory}` : 'Selecione uma categoria no gráfico de pizza'}
            </Typography>
            <Box sx={{ flex: 1, position: 'relative' }}>
              {selectedCategory && (
                <Bar 
                  data={barChartData[selectedCategory]} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top',
                      },
                      tooltip: {
                        enabled: true
                      }
                    },
                  }}
                />
              )}
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;