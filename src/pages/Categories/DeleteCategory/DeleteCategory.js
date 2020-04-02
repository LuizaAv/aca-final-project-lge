import React from 'react';
import propTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';

import { useStoreContext } from '../../../store/storeContext';
import { deleteCategory } from '../../../store/actions';
import useStyles from './DeleteCategory.style';

export default function DeleteCategory({ category }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();

  const handleDeleteCategory = () => {
    dispatch(deleteCategory(category));
  };

  return (
    <IconButton
      className={classes.iconButton}
      onClick={handleDeleteCategory}
    >
      <DeleteIcon className={classes.icon} />
    </IconButton>
  );
}

DeleteCategory.propTypes = {
  category: propTypes.shape({
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

DeleteCategory.defaultProps = {
  category: {
    id: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  },
};
