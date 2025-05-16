// Dados mockados para o gráfico de pizza
export const pieChartData = {
  labels: ['Vendas', 'Marketing', 'Desenvolvimento', 'Suporte', 'Administração'],
  datasets: [
    {
      data: [35, 25, 20, 15, 5],
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF'
      ],
      hoverBackgroundColor: [
        '#FF7394',
        '#46B2FB',
        '#FFDE66',
        '#5BD0D0',
        '#A976FF'
      ]
    }
  ]
};

// Dados mockados para os gráficos de barras correspondentes a cada categoria
export const barChartData = {
  'Vendas': {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Vendas por mês',
      data: [12, 19, 15, 8, 22, 14],
      backgroundColor: '#FF6384',
    }]
  },
  'Marketing': {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Gastos com Marketing',
      data: [8, 12, 10, 15, 7, 11],
      backgroundColor: '#36A2EB',
    }]
  },
  'Desenvolvimento': {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Horas de Desenvolvimento',
      data: [20, 25, 30, 22, 18, 28],
      backgroundColor: '#FFCE56',
    }]
  },
  'Suporte': {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Tickets de Suporte',
      data: [45, 38, 42, 50, 35, 40],
      backgroundColor: '#4BC0C0',
    }]
  },
  'Administração': {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
      label: 'Custos Administrativos',
      data: [5, 4, 6, 3, 7, 4],
      backgroundColor: '#9966FF',
    }]
  }
};