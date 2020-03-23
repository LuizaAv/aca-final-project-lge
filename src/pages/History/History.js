import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { useStoreContext } from "../../store/storeContext";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 10,
    width: 500,
    height: 140,
    border: "1.5px solid black",
    borderRadius: 10
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  item: {
    fontSize: 14,
    float: "left",
    marginLeft: 40
  },
  price: {
    fontSize: 14,
    marginLeft: 290
  },
  date: {
    fontSize: 14,
    marginLeft: 290,
    marginTop: -25
  },
  pos: {
    marginBottom: 12
  },
  category: {
    marginLeft: 40,
    marginTop: 20
  },
  line: {
    marginTop: 40,
    backgroundColor: "yellow"
  }
});

function History() {
  const classes = useStyles();
  const { state } = useStoreContext();

  return (
    <div>
      {state.budget.map(item =>
        item.id > 8 ? (
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography
                className={classes.item}
                color="textSecondary"
                gutterBottom
              >
                Name: {item.name}
              </Typography>
              <Typography
                className={classes.price}
                color="textSecondary"
                gutterBottom
              >
                Amount: {item.amount}
              </Typography>
              <hr className={classes.line} />
              <Typography
                className={classes.category}
                color="textSecondary"
                gutterBottom
              >
                Category: {item.category}
              </Typography>
              <Typography
                className={classes.date}
                color="textSecondary"
                gutterBottom
              >
                Date: {item.date}
              </Typography>
            </CardContent>
          </Card>
        ) : null
      )}
    </div>
  );
}

export default History;
