import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import SelectCategory from "./SelectCategory";
import { useStoreContext } from "../../store/storeContext";
import { addCategory } from "../../store/actions";

function AddBudget(props) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const { state, dispatch } = useStoreContext();
  const [changeableData, setChangeableData] = useState("");

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

  const handleAddingCategory = () => {
    const id =
      state.categories.reduce(
        (acc, category) => (category.id > acc ? category.id : acc),
        0
      ) + 1;
    const addedExpense = { id, type: "expense", name };
    setName("");
    setAmount("");
    setOpen(!true);
    dispatch(addCategory(addedExpense));
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
                <SelectCategory toggleData={changeableData} />
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
                onClick={handleAddingCategory}
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
