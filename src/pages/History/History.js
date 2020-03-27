import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

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

  filteredBudget.sort((a, b) => (
    isAscending
      ? a.amount - b.amount
      : b.amount - a.amount
  ));

  const handleMouseOver = (item) => {
    setOnItem(item);
  };

  return (
    <div>
      <Sort isAscending={isAscending} setIsAscending={setIsAscending} />

      <Filter filterType={filterType} setFilterType={setFilterType} />

      {filteredBudget.map((item) => (
        <Card className={classes.card} key={item.id}>
          <CardContent
            className={classes.content}
            onMouseEnter={() => handleMouseOver(item.id)}
            onMouseLeave={() => handleMouseOver('')}
          >
            <Typography>{item.name}</Typography>

            <Typography>
              {item.type === 'expense'
                ? `- ${item.amount}`
                : `+ ${item.amount}`}
            </Typography>

            <Fade in={onItem === item.id} className={classes.fade}>
              <div>
                <EditHistory budget={item} />
                <DeleteHistory budget={item} />
              </div>
            </Fade>
            <hr />
            <Typography>{item.category}</Typography>

            <Typography>{item.date}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
