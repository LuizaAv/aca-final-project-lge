import React, { useState } from 'react';
import propTypes from 'prop-types';
import { MainContext } from './mainContext';

export default function MainProvider({ children }) {
  const [currency, setCurrency] = useState('USD');
  const [rate, setRate] = useState({});
  const [loading, setLoading] = useState(true);

  return (
    <MainContext.Provider value={{
      currency, setCurrency, rate, setRate, loading, setLoading,
    }}
    >
      {children}
    </MainContext.Provider>
  );
}

MainProvider.propTypes = {
  children: propTypes.node.isRequired,
};
