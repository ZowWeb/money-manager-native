import React, {useContext, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {H1, Toast} from 'native-base';

import {Transaction} from './Transaction';

import {GlobalContext} from '../context/GlobalState';

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    paddingBottom: 8,
    marginVertical: 16,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  sectionDescription: {
    marginTop: 8,
    marginLeft: 0,
    paddingLeft: 0,
    fontSize: 18,
    fontWeight: '400',
    color: '#000',
  },
});

export const TransactionList = () => {
  const {transactions, getTransactions, loading, error} = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Toast.show({
      text: error || 'Fetching data...',
    });
  }, [loading]);

  return (
    <View style={styles.section}>
      <H1 style={styles.sectionTitle}>List of transactions</H1>
      {transactions.map(transaction => (
        <Transaction
          key={transaction._id}
          transaction={transaction}
          loading={loading}
        />
      ))}
    </View>
  );
};
