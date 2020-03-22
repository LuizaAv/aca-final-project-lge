import React from 'react';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { useStoreContext } from '../../store/storeContext';
import { deleteCategory } from '../../store/actions';

export default function DeleteCategory({ category }) {
  const { dispatch } = useStoreContext();

  const handleDeleteCategory = () => {
    dispatch(deleteCategory(category));
  };

  return (
    <Button variant="outlined" onClick={handleDeleteCategory}>
      Delete
    </Button>
  );
}

DeleteCategory.propTypes = {
  category: propTypes.shape({
    id: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }),
};

DeleteCategory.defaultProps = {
  category: {
    id: propTypes.number.isRequired,
    type: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  },
};
