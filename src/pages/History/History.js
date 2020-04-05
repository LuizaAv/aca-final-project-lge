import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddBudget from '../../components/AddBudget/AddBudget';
import Total from '../../components/Total/Total';


import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import DataFilter from '../../components/DataFilter/DataFilter';
import EditHistory from './EditHistory/EditHistory';
import DeleteHistory from './DeleteHistory/DeleteHistory';
import useStyles from './History.style';


export default function History() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);
  const [dateFilter, setDateFilter] = useState('all');

  // const date = state.budget.map((item) => item.date);
  // const splited = date.map((item) => item.toString().split('.'));
  // const itemDay = splited.map((item) => item[1]);
  // const itemMonth = splited.map((item) => item[0]);
  // const itemYear = splited.map((item) => item[2]);

  // const currentDate = new Date();
  // const currentDay = currentDate.getDate();
  // const currentMonth = currentDate.getMonth() + 1;
  // const currentYear = currentDate.getFullYear();

  // const checkedDay = (`0${currentDay}`);
  // const checkedMonth = (`0${currentMonth}`);

  // const day = currentDay < 10 ? checkedDay : currentDay;
  // const month = currentMonth < 10 ? checkedMonth : currentMonth;


  const filteredBudget = filterType === 'all'
    ? [...state.budget]
    : state.budget.filter((budget) => budget.type === filterType);

  const dayFilter = dateFilter === 'all'
    ? [...filteredBudget]
    : dateFilter === 'daily'
    ? filteredBudget.filter((budget) => budget.date.toLocaleDateString() === new Date().toLocaleDateString())
    : dateFilter === 'monthly'
    ? filteredBudget.filter((budget) => budget.date.toLocaleDateString().slice(3) === new Date().toLocaleDateString().slice(3))
    : dateFilter === 'yearly'
    ?  filteredBudget.filter((budget) => budget.date.toLocaleDateString().slice(6) === new Date().toLocaleDateString().slice(6))
    : [...filteredBudget]

    dayFilter.sort((a, b) => (isAscending ? a.amount - b.amount : b.amount - a.amount));


  return (
    <div className={classes.root}>

      <div className={classes.header}>
        <Total />
        <AddBudget />
      </div>

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <Filter filterType={filterType} setFilterType={setFilterType} />
        <DataFilter dateFilter={dateFilter} setDateFilter={setDateFilter} />
      </div>

      <div className={classes.flexContainer}>
        {dayFilter.map((item) => (
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
                <Typography>{item.date.toLocaleDateString()}</Typography>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
