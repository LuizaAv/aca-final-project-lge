import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useStoreContext } from '../../store/storeContext';
import useStyles from './Charts.style';

function randomColor() {
  return (`hsl(0, ${Math.floor(Math.random() * 100)}%, ${Math.floor(Math.random() * 10)}`);
}
console.log(randomColor());

export default function Charts() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const labels = state.budget.map((item) => item.category);
  const price = state.budget.map((item) => item.amount);
  const chartData = {
    type: 'bar',
    labels,
    datasets: [
      {
        label: 'All period',
        data: price,
        backgroundColor: [
          'hsl(0, 100%, 10%)',
          'hsl(0, 100%, 20%)',
          'hsl(0, 100%, 30%)',
          'hsl(0, 100%, 40%)',
          'hsl(0, 100%, 50%)',
          'hsl(0, 100%, 60%)',
          'hsl(0, 100%, 70%)',
          'hsl(0, 100%, 80%)',
          'hsl(0, 100%, 90%)',
        ],
      },
    ],
  };


  return (
    <div className={classes.flexContainer}>
      <Bar
        data={chartData}
        options={
        {
          title: {
            display: true,
            text: 'Total expenses and income',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'bottom',
          },
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero: true
              },
            }]
          }
        }
      }
      />
    </div>
  );
}
