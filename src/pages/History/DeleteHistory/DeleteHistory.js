import React from 'react';
import propTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

import { useStoreContext } from '../../../store/storeContext';
import { deleteBudget } from '../../../store/actions';

import useStyles from './DeleteHistory.style';

export default function DeleteHistory({ budget }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();

  const handleDeleteBudget = () => {
    dispatch(deleteBudget(budget));
  };

  return (
    <IconButton
      className={classes.iconButton}
      onClick={handleDeleteBudget}
    >
      <DeleteIcon className={classes.icon} />
    </IconButton>
  )
}

DeleteHistory.propTypes = {
  budget: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
  }),
};

DeleteHistory.defaultProps = {
  budget: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
    amount: propTypes.number.isRequired,
    date: propTypes.string.isRequired,
  },
};
