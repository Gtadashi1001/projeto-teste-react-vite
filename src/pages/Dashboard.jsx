import React, { useState, useRef, useEffect } from 'react';
import { Container, Box, Paper, Typography, Toolbar } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
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
  Legend,
  ChartDataLabels  // Registrar o plugin datalabels
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
          {/* Gráfico de Torta */}
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
                    datalabels: {
                      formatter: (value) => `${value}%`,
                      color: 'white',
                      backgroundColor: function(context) {
                        return context.dataset.backgroundColor[context.dataIndex];
                      },
                      borderRadius: 4,
                      font: {
                        weight: 'bold',
                        size: 12
                      },
                      padding: 6,
                      // Configuração para posicionar os rótulos fora do gráfico
                      anchor: 'end',
                      align: 'end',
                      offset: 8,
                      display: true
                    },
                    legend: {
                      position: 'bottom',
                      labels: {
                        padding: 20,
                        usePointStyle: true,
                        pointStyle: 'circle'
                      }
                    },
                    tooltip: {
                      enabled: true,
                      callbacks: {
                        label: function(context) {
                          const label = context.label || '';
                          const value = context.raw || 0;
                          return `${label}: ${value}%`;
                        }
                      },
                      backgroundColor: 'rgba(0,0,0,0.8)',
                      titleFont: {
                        size: 14
                      },
                      bodyFont: {
                        size: 13
                      },
                      padding: 10,
                      cornerRadius: 4,
                      displayColors: true
                    }
                  },
                  cutout: '50%', // Torna o gráfico mais parecido com uma torta com um buraco no meio
                  radius: '75%',  // Reduz um pouco para dar espaço aos rótulos
                  onHover: (event, chartElement) => {
                    if (event.native) {
                      event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
                    }
                  },
                  animation: {
                    animateRotate: true,
                    animateScale: true
                  },
                  layout: {
                    padding: 20 // Adiciona padding ao redor do gráfico para os rótulos externos
                  }
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
              {selectedCategory ? `Detalhes de ${selectedCategory}` : 'Selecione uma categoria no gráfico de torta'}
            </Typography>
            <Box sx={{ flex: 1, position: 'relative' }}>
              {selectedCategory && (
                <Bar 
                  data={barChartData[selectedCategory]} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      datalabels: {
                        // Desativar datalabels para o gráfico de barras
                        display: false
                      },
                      legend: {
                        position: 'top',
                      },
                      tooltip: {
                        enabled: true
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true
                      }
                    }
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