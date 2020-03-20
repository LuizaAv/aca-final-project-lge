import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Summary from "./Summary/Summary";
import Categories from "./Categories/Categories";
import History from "./History/History";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "../index.css";
import Addexpense from "./Popups/Addexpense";
import Addincome from "./Popups/Addincome";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Main() {
  const classes = useStyles();
  const [isExpenseOpen, setExpenseIsOpen] = useState(false);
  const [isIncomeOpen, setIncomeIsOpen] = useState(false);


  const handleExpense = () => {
      setExpenseIsOpen(!isExpenseOpen);
  }
  

  const handleIncome = () => {
      setIncomeIsOpen(!isIncomeOpen);
  }

  return (
    <div className="main">
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={handleExpense}
      >
        add Expense
      </Button>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        onClick={handleIncome}
      >
        add Income
      </Button>

      <div className="links">
        <Link to="/">Summary</Link>
        <Link to="/Categories">Categories</Link>
        <Link to="/History">History</Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Summary />
        </Route>

        <Route path="/Categories">
          <Categories />
        </Route>

        <Route path="/History">
          <History />
        </Route>
      </Switch>
      
      {isExpenseOpen === true && isIncomeOpen === false && <Addexpense />}
      {isIncomeOpen === true && isExpenseOpen === false && <Addincome />}
    </div>
  );
}
