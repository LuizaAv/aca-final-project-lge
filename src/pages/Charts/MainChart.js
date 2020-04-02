import React from 'react';
import TotalChart from './TotalCharts';

import useStyles from './Charts.style';

export default function MainChart() {
  const classes = useStyles();
  return (
    <div className={classes.flexContainer}>
      <TotalChart />
    </div>
  );
}
