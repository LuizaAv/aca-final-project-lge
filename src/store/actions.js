export const ADD_CATEGORY = 'ADD_CATEGORY';
export const REMOVE_CATEGORY = 'REMOVE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export const ADD_BUDGET = 'ADD_BUDGET';
export const REMOVE_BUDGET = 'REMOVE_BUDGET';
export const EDIT_BUDGET = 'EDIT_BUDGET';


export function addCategory(payload) {
  return { type: ADD_CATEGORY, payload };
}

export function removeCategory(payload) {
  return { type: REMOVE_CATEGORY, payload };
}

export function editCategory(payload) {
  return { type: EDIT_CATEGORY, payload };
}

export function addBudget(payload) {
  return { type: ADD_BUDGET, payload };
}

export function removeBudget(payload) {
  return { type: REMOVE_BUDGET, payload };
}

export function editBudget(payload) {
  return { type: EDIT_BUDGET, payload };
}

