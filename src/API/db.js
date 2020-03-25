import { v4 as uuidv4 } from 'uuid';

export const budget = [
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Insurance',
    category: 'Automobile',
    amount: 500,
    date: '19.03.2020',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Concert',
    category: 'Entertainment',
    amount: 510,
    date: '20.03.2020',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Groceries',
    category: 'Food',
    amount: 520,
    date: '21.03.2020',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'HealthCare',
    category: 'Medical',
    amount: 530,
    date: '22.03.2020',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Utilities',
    category: 'Electric',
    amount: 540,
    date: '23.03.2020',
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Salary',
    category: 'Salary',
    amount: 550,
    date: '24.03.2020',
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Equities',
    category: 'Equities',
    amount: 560,
    date: '25.03.2020',
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Pensions',
    category: 'Pensions',
    amount: 570,
    date: '26.03.2020',
  },
];

export const categories = [
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Automobile',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Entertainment',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Food',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Medical',
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Electric',
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Salary',
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Equities',
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Pensions',
  },
];
