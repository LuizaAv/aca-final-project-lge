import { ADD_CATEGORY, ADD_BUDGET } from './actions';

export function categoriesReducer(state, action) {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
}

export function budgetReducer(state, action) {
  switch (action.type) {
    case ADD_BUDGET:
      return [...state, action.payload];
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
