export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_BUDGET = 'ADD_BUDGET';


export function addCategory(payload) {
  return { type: ADD_CATEGORY, payload };
}

export function addBudget(payload) {
  return { type: ADD_BUDGET, payload };
}
