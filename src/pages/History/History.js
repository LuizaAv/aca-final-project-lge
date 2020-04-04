import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AddBudget from '../../components/AddBudget/AddBudget';
import TotalForHistory from '../Summary/Total/TotalForHistory';


import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import EditHistory from './EditHistory';
import DeleteHistory from './DeleteHistory';
import useStyles from './History.style';

// import Emptypage from './Emptyhistorypage';

export default function History() {
  const classes = useStyles();
  const { state } = useStoreContext();
  const [filterType, setFilterType] = useState('all');
  const [isAscending, setIsAscending] = useState(true);
  const [onItem, setOnItem] = React.useState('');

  const filteredBudget = filterType === 'all'
    ? [...state.budget]
    : state.budget.filter((budget) => budget.type === filterType);

  filteredBudget.sort((a, b) => (isAscending ? a.amount - b.amount : b.amount - a.amount));

  const handleMouseOver = (item) => {
    setOnItem(item);
  };

  return (
    <>
      <div className={classes.total}>
        <AccountBalanceWalletIcon style={{ fontSize: '44px', marginTop: '7px' }} />
        <TotalForHistory />
        <AddBudget />
      </div>
      <div className={classes.tools}>
        <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
        <Filter filterType={filterType} setFilterType={setFilterType} />
      </div>
      <div className={classes.flexContainer}>
        {filteredBudget.map((item) => (
          <div item key={item.id}>
            <Card className={classes.card}>
              <CardContent
                onMouseEnter={() => handleMouseOver(item.id)}
                onMouseLeave={() => handleMouseOver('')}
              >
                <div className={classes.nameAmount}>
                  <div className={classes.name}>
                    <Typography>{item.name}</Typography>
                  </div>
                  <div className={classes.amount}>
                    <div>
                      <EditHistory budget={item} className={classes.icons} />
                      <DeleteHistory budget={item} className={classes.icons} />
                    </div>
                  </div>
                </div>

                <hr style={{ marginTop: '28px' }} />
                <div className={classes.categoryDate}>
                  <div>
                    <Typography>{item.category}</Typography>
                  </div>
                  <Typography>
                    {item.type === 'expense'
                      ? `- ${item.amount}`
                      : `+ ${item.amount}`}
                  </Typography>
                  <div>
                    <Typography>{item.date}</Typography>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}
