import React from 'react';
import propTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

import { useStoreContext } from '../../../store/storeContext';
import { deleteCategory } from '../../../store/actions';

const useStyles = makeStyles({
  icon: {
    color: '#466d6d',
    borderRadius: '100%',
    padding: 10,
    '&:hover': {
      backgroundColor: '#00000010',
      transform: 'scale(1.1)',
    },
  },
});

export default function DeleteCategory({ category }) {
  const classes = useStyles();
  const { dispatch } = useStoreContext();

  const handleDeleteCategory = () => {
    dispatch(deleteCategory(category));
  };

  return (
    <DeleteIcon fontSize="large" className={classes.icon} onClick={handleDeleteCategory} />
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
