const URL = 'http://localhost:3010';

export const dbGetCategory = () => (
  fetch(`${URL}/categories`)
    .then((response) => response.json())
);

export const dbAddCategory = (payload) => (
  fetch(`${URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
);

export const dbEditCategory = (payload) => (
  fetch(`${URL}/categories/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
);

export const dbDeleteCategory = (payload) => (
  fetch(`${URL}/categories/${payload.id}`, {
    method: 'DELETE',
  })
);

export const dbGetBudget = () => (
  fetch(`${URL}/budget`)
    .then((response) => response.json())
    .then((budget) => (
      budget.map((item) => ({ ...item, date: new Date(item.date) }))
    ))
);

export const dbAddBudget = (payload) => (
  fetch(`${URL}/budget`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
);

export const dbEditBudget = (payload) => (
  fetch(`${URL}/budget/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
);

export const dbDeleteBudget = (payload) => (
  fetch(`${URL}/budget/${payload.id}`, {
    method: 'DELETE',
  })
);

export const rateExchange = () => (
  fetch('http://www.floatrates.com/daily/usd.json')
    .then((response) => response.json())
    .then((rate) => ({
      USD: 1, AMD: rate.amd.rate, RUB: rate.rub.rate, EUR: rate.eur.rate,
    }))
    .catch(() => ({
      USD: 1, AMD: 480, RUB: 74, EUR: 0.91,
    }))
);
