import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AddBudget from '../../components/AddBudget/AddBudget';
import Total from '../../components/Total/Total';
import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import DateFilter from '../../components/DateFilter/DateFilter';
import EditHistory from './EditHistory/EditHistory';
import DeleteHistory from './DeleteHistory/DeleteHistory';
import useStyles from './History.style';
import HistorySearch from '../../components/HistorySearch/HistorySearch';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function History() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);
  const [dateFilter, setDateFilter] = useState('all');
  const [event,setEvent]=useState('');
  
  const [open,setOpen]=useState(false);
  

  const handleClose=()=>{
    setOpen(false)
  }




  const filteredBudget = filterType === 'all'
    ? [...state.budget]
    : state.budget.filter((budget) => budget.type === filterType);

  const dayCheck = () => filteredBudget.filter(
    (budget) => budget.date.toLocaleDateString() === new Date().toLocaleDateString(),
  );

  const monthCheck = () => filteredBudget.filter(
    (budget) => budget.date.toLocaleDateString().slice(3)
        === new Date().toLocaleDateString().slice(3),
  );

  const yearCheck = () => filteredBudget.filter(
    (budget) => budget.date.toLocaleDateString().slice(6)
      === new Date().toLocaleDateString().slice(6),
  );
  const dayFilter = dateFilter === 'all'
    ? [...filteredBudget]
    : dateFilter === 'daily'
      ? dayCheck()
      : dateFilter === 'monthly'
        ? monthCheck()
        : dateFilter === 'yearly'
          ? yearCheck()
          : [...filteredBudget];

  dayFilter.sort((a, b) => (isAscending ? a.amount - b.amount : b.amount - a.amount));

  const Searched = event === '' ? dayFilter : dayFilter.filter(item=>item.name.toLowerCase().startsWith(event.toLowerCase()))
   
  

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Total />
        <AddBudget />
      </div>

      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <Filter filterType={filterType} setFilterType={setFilterType} />
        <DateFilter dateFilter={dateFilter} setDateFilter={setDateFilter} />
        <div>
      <HistorySearch e={event} setE={setEvent}/>
      </div>
      </div>
      
      <div className={classes.flexContainer}>
        {Searched.map((item) => (
          <Card key={item.id} className={classes.card}>
            <CardContent>
              <div className={classes.nameAmount}>
                <Typography className={classes.name}>{item.name}</Typography>
                <div className={classes.amount}>
                  <EditHistory budget={item} SnackBarOpen={setOpen} />
                  <DeleteHistory budget={item} SnackBarOpen={setOpen}   />
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
}
