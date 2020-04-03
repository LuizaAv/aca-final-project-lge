import { v4 as uuidv4 } from 'uuid';

export const budget = [
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Insurance',
    category: 'Automobile',
    amount: 500,
    date: new Date('March 19, 2020 03:24:00'),
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Concert',
    category: 'Entertainment',
    amount: 310,
    date: new Date('March 21, 2020 03:24:00'),
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Groceries',
    category: 'Food',
    amount: 120,
    date: new Date('March 23, 2020 03:24:00'),
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'HealthCare',
    category: 'Medical',
    amount: 530,
    date: new Date('March 25, 2020 03:24:00'),
  },
  {
    id: uuidv4(),
    type: 'expense',
    name: 'Utilities',
    category: 'Electric',
    amount: 340,
    date: new Date('March 26, 2020 03:24:00'),
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Salary',
    category: 'Salary',
    amount: 540,
    date: new Date('March 24, 2020 03:24:00'),
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Equities',
    category: 'Equities',
    amount: 90,
    date: new Date('March 22, 2020 03:24:00'),
  },
  {
    id: uuidv4(),
    type: 'income',
    name: 'Pensions',
    category: 'Pensions',
    amount: 270,
    date: new Date('March 20, 2020 03:24:00'),
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
