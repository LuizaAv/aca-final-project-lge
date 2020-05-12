import React, { useState } from 'react';
import propTypes from 'prop-types';
import { LoadingContext } from './loadingContext';

export default function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: propTypes.node.isRequired,
};
