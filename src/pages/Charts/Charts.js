import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useStoreContext } from '../../store/storeContext';


export default function Charts() {
  const { state } = useStoreContext();
  const labels = state.budget.map((item) => item.category);
  const price = state.budget.map((item) => item.amount);
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Amount',
        data: price,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(200, 160, 52, 0.6)',
          'rgba(258, 25, 85, 0.6)',
        ],
      },
    ],
  };


  return (
    <div>
      <h1>Total expenses and income</h1>
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
