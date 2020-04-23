import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'native-base';

import {Income} from './Income';
import {Expense} from './Expense';
import {Balance} from './Balance';

import {GlobalContext} from '../context/GlobalState';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
});

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
    <Card style={styles.row}>
      <Income income={income} />
      <Expense expense={expense} />
      <Balance total={total} />
    </Card>
  );
}
