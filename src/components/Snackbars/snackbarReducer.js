import {
  ADD,
  EDIT,
  DELETE,
  CANCEL,
  ERROR,
  CLOSE,
} from './snackbarActions';

export default function snackbarReducer(state, action) {
  switch (action) {
    case ADD:
      return { severity: 'success', message: 'snackbarAdd', open: true };
    case EDIT:
      return { severity: 'success', message: 'snackbarEdit', open: true };
    case DELETE:
      return { severity: 'success', message: 'snackbarDelete', open: true };
    case CANCEL:
      return { severity: 'warning', message: 'snackbarCancel', open: true };
    case ERROR:
      return { severity: 'error', message: 'snackbarError', open: true };
    case CLOSE:
      return { ...state, open: false };
    default:
      return state;
  }
}
