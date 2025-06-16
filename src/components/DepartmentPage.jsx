import React from 'react';
import { Bar } from 'react-chartjs-2';
import { departmentChartData } from '../data/departmentData';
import './DepartmentPage.css';

const DepartmentPage = ({ department }) => {
  const chartData = departmentChartData[department];
  
  if (!chartData) {
    return <div>Departamento não encontrado</div>;
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          color: '#333',
        },
      },
      x: {
        grid: {
          color: '#f0f0f0',
        },
        ticks: {
          color: '#333',
        },
      },
    },
    elements: {
      bar: {
        backgroundColor: 'white',
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div className="department-page">
      <h1 className="department-title">Departamento de {department}</h1>
      <div className="charts-grid">
        {Object.entries(chartData).map(([emotion, data]) => (
          <div key={emotion} className="chart-container">
            <h3 className="chart-title">{emotion}</h3>
            <div className="chart-wrapper">
              <Bar data={data} options={chartOptions} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPage;