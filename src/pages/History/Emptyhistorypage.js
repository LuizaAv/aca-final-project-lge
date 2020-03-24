import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10,
    width: 500,
    height: 140,
    border: '1.5px solid black',
    borderRadius: 10,
  },
  item: {
    fontSize: 14,
    float: 'left',
    marginLeft: 40,
  },
});

function Emptypage() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.item}
          color="textSecondary"
          gutterBottom
        >
          There isn't any post yet !!!
        </Typography>
      </CardContent>
    </Card>
  );
}
export default Emptypage;
