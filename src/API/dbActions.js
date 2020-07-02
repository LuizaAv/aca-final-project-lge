// const URL = 'http://localhost:3010';
const URL = 'https://my-json-server.typicode.com/LuizaAv/aca-final-project-lge';

export const dbGetCategory = async () => {
  const response = await fetch(`${URL}/categories`);
  return response.json();
};

export const dbAddCategory = (newCategory) => (
  fetch(`${URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCategory),
  })
);

export const dbEditCategory = (editedCategory) => (
  fetch(`${URL}/categories/${editedCategory.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedCategory),
  })
);

export const dbDeleteCategory = (categoryId) => (
  fetch(`${URL}/categories/${categoryId}`, {
    method: 'DELETE',
  })
);

export const dbGetBudget = async () => {
  const response = await fetch(`${URL}/budget`);
  const budget = await response.json();
  return budget.map((item) => ({ ...item, date: new Date(item.date) }));
};

export const dbAddBudget = (newBudget) => (
  fetch(`${URL}/budget`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBudget),
  })
);

export const dbEditBudget = (editedBudget) => (
  fetch(`${URL}/budget/${editedBudget.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editedBudget),
  })
);

export const dbDeleteBudget = (budgetId) => (
  fetch(`${URL}/budget/${budgetId}`, {
    method: 'DELETE',
  })
);

export const rateExchange = async () => {
  try {
    const response = await fetch('http://www.floatrates.com/daily/usd.json');
    const rate = await response.json();
    return {
      USD: 1,
      AMD: rate.amd.rate,
      RUB: rate.rub.rate,
      EUR: rate.eur.rate,
    };
  } catch (err) {
    return {
      USD: 1,
      AMD: 480,
      RUB: 74,
      EUR: 0.91,
    };
  }
};
