import React from 'react';
import propTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

import { useStoreContext } from '../../store/storeContext';
import { deleteCategory } from '../../store/actions';

export default function DeleteCategory({ category }) {
  const { dispatch } = useStoreContext();

  const handleDeleteCategory = () => {
    dispatch(deleteCategory(category));
  };

  return (
    <Fab color="primary" size="small" onClick={handleDeleteCategory}>
      <DeleteIcon />
    </Fab>
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
