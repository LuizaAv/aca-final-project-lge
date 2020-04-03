import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddBudget from '../../components/AddBudget/AddBudget';
import Total from '../../components/Total/Total';


import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import EditHistory from './EditHistory/EditHistory';
import DeleteHistory from './DeleteHistory/DeleteHistory';
import useStyles from './History.style';

export default function History() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);

  const filteredBudget = filterType === 'all'
    ? [...state.budget]
    : state.budget.filter((budget) => budget.type === filterType);

  filteredBudget.sort((a, b) => (isAscending ? a.amount - b.amount : b.amount - a.amount));

  return (
    <div className={classes.root}>

      <div className={classes.header}>
        <Total />
        <AddBudget />
      </div>

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <Filter filterType={filterType} setFilterType={setFilterType} />
      </div>

      <div className={classes.flexContainer}>
        {filteredBudget.map((item) => (
          <Card key={item.id} className={classes.card}>
            <CardContent>
              <div className={classes.nameAmount}>
                <Typography className={classes.name}>{item.name}</Typography>
                <div className={classes.amount}>
                  <EditHistory budget={item} />
                  <DeleteHistory budget={item} />
                </div>
              </div>

              <hr className={classes.hr} />

              <div className={classes.categoryDate}>
                <Typography>{item.category}</Typography>
                <Typography>
                  {item.type === 'expense'
                    ? `- ${item.amount}`
                    : `+ ${item.amount}`}
                </Typography>
                <Typography>{item.date}</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
