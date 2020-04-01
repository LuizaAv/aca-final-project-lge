import React from 'react';
import MonthlyChart from './MonthlyChart';
import TotalChart from './TotalCharts'

export default function MainChart() {

  return (
    <div>
      <TotalChart/>
      <MonthlyChart/>
    </div>
  );
}
