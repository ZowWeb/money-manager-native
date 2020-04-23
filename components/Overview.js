import React, {useContext} from 'react';

import {Income} from './Income';
import {Expense} from './Expense';
import {Balance} from './Balance';

import {GlobalContext} from '../context/GlobalState';

import {Card, View} from 'native-base';
import theme from '../theme';

export default function Overview() {
  const {transactions, loading} = useContext(GlobalContext);

  // Update the income, expense and balance
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts
    .filter(amount => amount > 0)
    .reduce((acc, amount) => (acc += amount), 0);

  const expense =
    amounts
      .filter(amount => amount < 0)
      .reduce((acc, amount) => (acc += amount), 0) * -1;

  const total = amounts.reduce((acc, amount) => (acc += amount), 0);

  return (
    <Card style={theme.row}>
      <Income income={income} />
      <Expense expense={expense} />
      <Balance total={total} />
    </Card>
  );
}
