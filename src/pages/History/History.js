import React from "react";
//import Filter from '../../components/Filter/Filter'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10, 
    width: 500, 
    height: 140, 
    border: '1.5px solid black', 
    borderRadius: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  item: {
    fontSize: 14,
    float: 'left',
    marginLeft: 40,
  },
  price: {
    fontSize: 14,
    marginLeft: 290
  },
  date: {
    fontSize: 14,
    marginLeft: 290,
    marginTop: 20
  },
  pos: {
    marginBottom: 12,
  },
  learnMore:{
    marginLeft: 2,
    width: 120,
    borderRadius: 7,
    marginTop:-35
  },
  line: {
    marginTop: 40
  }
});

function History() {
  const classes = useStyles();

  return <div>
      <Card className={classes.root} variant="outlined">
        <CardContent>
        <Typography className={classes.item} color="textSecondary" gutterBottom>
          Item Name
        </Typography>
        <Typography className={classes.price} color="textSecondary" gutterBottom>
          Price
        </Typography>
        <hr className={classes.line}/>
        <Typography  className={classes.date} color="textSecondary" gutterBottom>
        Adding date: 
        </Typography>
        <CardActions className={classes.learnMore}>
        <Button size="small">Learn More</Button>
      </CardActions>
        </CardContent>
      </Card>
  </div>;
}

export default  History