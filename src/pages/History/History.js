import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import { useStoreContext } from '../../store/storeContext';

import Sort from '../../components/Sort/Sort';
import Filter from '../../components/Filter/Filter';
import EditHistory from './EditHistory';
import DeleteHistory from './DeleteHistory';
// import Emptypage from './Emptyhistorypage';

const useStyles = makeStyles({
  card: {
    width: 500,
    border: '1.5px solid black',
    borderRadius: 10,
    '&:hover': {
      backgroundColor: '#00000075',
    },
  },
  fade: {
    position: 'absolute',
    width: 500,
    margin: 'auto',
  },
});


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
    <Grid container justify="center">
      <Grid item>
        <Grid container justify="center" spacing={10}>
          <Grid item>
            <Sort isAscending={isAscending} setIsAscending={setIsAscending} />
          </Grid>
          <Grid item>
            <Filter filterType={filterType} setFilterType={setFilterType} />
          </Grid>
        </Grid>

        <Grid container direction="column" justify="center" spacing={2}>
          {filteredBudget.map(item => (
            <Grid item key={item.id}>
              <Card className={classes.card}>
                <CardContent
                  onMouseEnter={() => handleMouseOver(item.id)}
                  onMouseLeave={() => handleMouseOver('')}
                >
                  <Grid container justify="center" direction="column">
                    <Grid item>
                      <Grid container direction="row" justify="space-between">
                        <Grid item>
                          <Typography>{item.name}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>
                            {item.type === 'expense'
                              ? `- ${item.amount}`
                              : `+ ${item.amount}`}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item className={classes.fade}>
                      <Grid container justify="center">
                        <Grid item>
                          <Fade in={onItem === item.id}>
                            <Grid container spacing={10}>
                              <Grid item>
                                <EditHistory budget={item} />
                              </Grid>
                              <Grid item>
                                <DeleteHistory budget={item} />
                              </Grid>
                            </Grid>
                          </Fade>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item>
                      <hr />
                    </Grid>

                    <Grid item>
                      <Grid container direction="row" justify="space-between">
                        <Grid item>
                          <Typography>{item.category}</Typography>
                        </Grid>
                        <Grid item>
                          <Typography>{item.date}</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
