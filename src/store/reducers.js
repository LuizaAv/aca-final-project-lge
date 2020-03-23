import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  ADD_BUDGET,
  DELETE_BUDGET,
  EDIT_BUDGET,
  SORT_BUDGET,
} from './actions';

export function categoriesReducer(state, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload.id);
    case EDIT_CATEGORY:
      return state.map((category) => (
        category.id === action.payload.id
          ? action.payload
          : category));
    default:
      return state;
  }
}

export function budgetReducer(state, action) {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.payload];
    case DELETE_BUDGET:
      return state.filter((budget) => budget.id !== action.payload.id);
    case EDIT_BUDGET:
      return state.map((budget) => (
        budget.id === action.payload.id
          ? action.payload
          : budget));
    case SORT_BUDGET:
      return state.sort((a, b) => (
        action.payload
          ? a.amount - b.amount
          : b.amount - a.amount
      ));
    default:
      return state;
  }
}

export function reducer(state, action) {
  return {
    categories: categoriesReducer(state.categories, action),
    budget: budgetReducer(state.budget, action),
  };
}
