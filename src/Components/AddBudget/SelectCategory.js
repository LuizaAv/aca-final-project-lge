import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStoreContext } from "../../store/storeContext";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginLeft: 100,
    marginTop: -30
  }
}));

const SelectCategory = props => {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const { state } = useStoreContext();

  const handleChangeSelect = event => {
    setCategory(event.target.value);
  };

  return (
      
  );
};

export default SelectCategory;
