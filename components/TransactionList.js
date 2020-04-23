import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';

import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';

import {H1, Toast, List, Card} from 'native-base';
import theme from '../theme';

export default function TransactionList() {
  const {transactions, getTransactions, loading, error} = useContext(
    GlobalContext,
  );

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Toast.show({
      text: 'Loading...',
      duration: 0,
    });
  }, [loading]);

  loading == false && Toast.hide();

  return (
    <View style={theme.section}>
      <H1 style={theme.sectionTitle}>List of transactions</H1>
      <Card>
        {transactions.map(transaction => (
          <Transaction
            key={transaction._id}
            transaction={transaction}
            loading={loading}
          />
        ))}
      </Card>
    </View>
  );
}
