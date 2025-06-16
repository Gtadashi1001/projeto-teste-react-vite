import { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { pieChartData, barChartData } from '../data/mockData';

// Registrar os componentes necessários do Chart.js
ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title
);


const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Configuração de opções para o gráfico de pizza
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.formattedValue || '';
            return `${label}: ${value}%`;
          }
        }
      }
    },
    onHover: (event, chartElement) => {
      if (chartElement.length === 0) {
        setSelectedCategory(null);
      } else {
        const index = chartElement[0].index;
        setSelectedCategory(pieChartData.labels[index]);
      }
    }
  };

  // Configuração de opções para o gráfico de barras
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: selectedCategory ? `Detalhes de ${selectedCategory}` : 'Selecione uma categoria no gráfico de pizza',
      },
    },
  };

  return (
    <div className="dashboard">
      <h1>Dashboard de Análise</h1>
      <div className="charts-container">
        <div className="pie-chart-container">
          <h2>Sentimentos</h2>
          <div className="chart-wrapper">
            <Pie data={pieChartData} options={pieOptions} />
          </div>
        </div>
        <div className="bar-chart-container">
          <h2>Detalhes por Sentimento</h2>
          <div className="chart-wrapper">
            {selectedCategory ? (
              <Bar 
                data={barChartData[selectedCategory]} 
                options={barOptions} 
              />
            ) : (
              <div className="no-selection">
                Passe o cursor sobre uma fatia do gráfico de pizza para ver detalhes
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;