const URL = 'http://localhost:3010';

export function dbGetCategory() {
  return (
    fetch(`${URL}/categories`)
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error))
  );
}

export function dbAddCategory(payload) {
  fetch(`${URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', JSON.stringify(response)));
}

export function dbEditCategory(payload) {
  fetch(`${URL}/categories/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', JSON.stringify(response)));
}

export function dbDeleteCategory(payload) {
  fetch(`${URL}/categories/${payload.id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', JSON.stringify(response)));
}

export function dbGetBudget() {
  return (
    fetch(`${URL}/budget`)
      .then((response) => response.json())
      .catch((error) => console.error('Error:', error))
  );
}

export function dbAddBudget(payload) {
  fetch(`${URL}/budget`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', JSON.stringify(response)));
}

export function dbEditBudget(payload) {
  fetch(`${URL}/budget/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', JSON.stringify(response)));
}

export function dbDeleteBudget(payload) {
  fetch(`${URL}/budget/${payload.id}`, {
    method: 'DELETE',
  })
    .then((response) => response.json())
    .catch((error) => console.error('Error:', error))
    .then((response) => console.log('Success:', JSON.stringify(response)));
}
