import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputBase from "@material-ui/core/InputBase";

function AddBudget() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
    }
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Expense
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Income
      </Button>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            + Add
          </Button>
          <DialogTitle id="form-dialog-title" style={style.title}>
            Expense
          </DialogTitle>
          <DialogContent style={style.sizes}>
            <div>
              <label>Category</label>
              <TextField style={style.textfield} />
            </div>
            <div>
              <label>Name</label>
              <TextField style={style.textfield} />
            </div>
            <div>
              <label>Amount</label>
              <TextField style={style.textfield} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default AddBudget;
