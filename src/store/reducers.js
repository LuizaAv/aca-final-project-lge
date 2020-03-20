import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  EDIT_CATEGORY,
  ADD_BUDGET,
  REMOVE_BUDGET,
  EDIT_BUDGET,
} from './actions';

export function categoriesReducer(state, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    case REMOVE_CATEGORY:
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
    case REMOVE_BUDGET:
      return state.filter((budget) => budget.id !== action.payload.id);
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
