import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useStoreContext } from "../../store/storeContext";

export const Category = React.createContext();

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

  const handleChange = event => {
    setCategory(event.target.value);
  };

  return (
    <Category.Provider value={category}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          {state.categories.map(category =>
            category.type == props.toggleData.toLowerCase() ? (
              <MenuItem value={category.name} key={category.name}>
                {category.name}
              </MenuItem>
            ) : null
          )}
        </Select>
      </FormControl>
    </Category.Provider>
  );
};

export default SelectCategory;
