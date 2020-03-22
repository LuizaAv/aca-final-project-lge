import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { addBudget } from "../../store/actions";
import { useStoreContext } from "../../store/storeContext";

import { budget } from "../../API/db";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: 100,
    marginTop: -30
  }
}));

function AddBudget(props) {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const { state, dispatch } = useStoreContext();
  const [changeableData, setChangeableData] = useState("");
  const [date, setDate] = useState("")

  const handleClickExpense = () => {
    setOpen(true);
    setChangeableData("Expense");
  };

  const handleClickIncome = () => {
    setOpen(true);
    setChangeableData("Income");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNameChange = e => {
    setName(e.target.value);
    console.log(name);
  };

  const handleAmountChange = e => {
    setAmount(e.target.value);
    console.log(amount);
  };

  const handleAddingBudget = () => {
    const id =
      state.categories.reduce(
        (acc, category) => (category.id > acc ? category.id : acc),
        0
      ) + 1;
    const newDate = new Date()
    setDate(`${newDate.getDay()}.${newDate.getMonth()}.${newDate.getYear()}`)
    const addedBudget = {id, type: changeableData, name, category, amount, date: newDate};
    setName("");
    setAmount("");
    setOpen(!true);
    dispatch(addBudget(addedBudget));
    console.log(budget)
  };

  const handleChangeSelect = event => {
    setCategory(event.target.value);
  };

  const style = {
    sizes: {
      height: 200,
      width: 300,
      margin: "auto"
    },
    title: {
      textAlign: "center"
    },
    textfield: {
      marginLeft: 100,
      marginTop: -10
    },
    submitButton: {
      height: 30,
      width: 100,
      marginLeft: 150,
      marginBottom: -80
    }
  };
  return (
    <div>
      <div className="addExpense">
        <Button variant="outlined" value="Expense" onClick={handleClickExpense}>
          Add Expense
        </Button>
        <Button variant="outlined" value="Income" onClick={handleClickIncome}>
          Add Income
        </Button>
        <div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="form-dialog-title" style={style.title}>
              {changeableData}
            </DialogTitle>
            <DialogContent style={style.sizes}>
              <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">
                    Category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={handleChangeSelect}
                  >
                    {state.categories.map(category =>
                      category.type == changeableData.toLowerCase() ? (
                        <MenuItem value={category.name} key={category.name}>
                          {category.name}
                        </MenuItem>
                      ) : null
                    )}
                  </Select>
                </FormControl>
              </div>
              <div>
                <label>Name</label>
                <TextField
                  style={style.textfield}
                  onChange={handleNameChange}
                />
              </div>
              <div>
                <label>Amount</label>
                <TextField
                  style={style.textfield}
                  onChange={handleAmountChange}
                />
              </div>
              <Button
                variant="outlined"
                style={style.submitButton}
                onClick={handleAddingBudget}
              >
                + Add
              </Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default AddBudget;
