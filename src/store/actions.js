export const INIT_CATEGORY = 'INIT_CATEGORY';
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

export const INIT_BUDGET = 'INIT_BUDGET';
export const ADD_BUDGET = 'ADD_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';
export const EDIT_BUDGET = 'EDIT_BUDGET';

export function initCategory(payload) {
  return { type: INIT_CATEGORY, payload };
}

export function addCategory(payload) {
  return { type: ADD_CATEGORY, payload };
}

export function deleteCategory(payload) {
  return { type: DELETE_CATEGORY, payload };
}

export function editCategory(payload) {
  return { type: EDIT_CATEGORY, payload };
}

export function initBudget(payload) {
  return { type: INIT_BUDGET, payload };
}

export function addBudget(payload) {
  return { type: ADD_BUDGET, payload };
}

export function deleteBudget(payload) {
  return { type: DELETE_BUDGET, payload };
}

export function editBudget(payload) {
  return { type: EDIT_BUDGET, payload };
}
