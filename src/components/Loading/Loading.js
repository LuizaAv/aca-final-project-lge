import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLoadingContext } from './loadingContext';
import useStyles from './Loading.style';

export default function Loading() {
  const { loading } = useLoadingContext();
  const classes = useStyles();

  return (
    <div className={classes.progress}>
      {loading
        ? <CircularProgress size={50} />
        : null}
    </div>
  );
}
