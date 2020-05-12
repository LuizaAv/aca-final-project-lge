import {
  INIT_CATEGORY,
  ADD_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  INIT_BUDGET,
  ADD_BUDGET,
  DELETE_BUDGET,
  EDIT_BUDGET,
} from './actions';

export function categoriesReducer(state, action) {
  switch (action.type) {
    case INIT_CATEGORY:
      return [...state, ...action.payload];
    case ADD_CATEGORY:
      return [...state, action.payload];
    case DELETE_CATEGORY:
      return state.filter((category) => category.id !== action.payload);
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
    case INIT_BUDGET:
      return [...state, ...action.payload];
    case ADD_BUDGET:
      return [...state, action.payload];
    case DELETE_BUDGET:
      return state.filter((budget) => budget.id !== action.payload);
    case EDIT_BUDGET:
      return state.map((budget) => (
        budget.id === action.payload.id
          ? action.payload
          : budget));
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
