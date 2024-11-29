import React from 'react';
import { Bar } from 'react-chartjs-2';

// Import the required Chart.js modules
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
  // Register the modules
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({chart_data}) => {
    // Define the data for the chart
  const data = {
    labels: chart_data.map((item) => item.category), // Extract the categories
    datasets: [
      {
        label: 'Expenses',
        data: chart_data.map((item) => parseFloat(item.prices)), // Extract the prices
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Bar colors
        borderWidth: 1,
      },
    ],
  };

  // Define options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Expense Chart',
      },
    },
  };

  return (
     <Bar data={data} options={options} />
  )
}

export default Chart