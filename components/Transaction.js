import React from 'react';
import {StyleSheet} from 'react-native';

import {Card, CardItem, Text, Body, H1} from 'native-base';

import {numberWithCommas} from '../utils/format';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
});

export const Transaction = ({transaction}) => {
  // const { deleteTransaction } = useContext(GlobalContext);

  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <Card>
      <CardItem style={styles.row}>
        <Body style={styles.row}>
          <Text>{transaction.text}</Text>
          <Text>{sign}&#8377;{numberWithCommas(Math.abs(transaction.amount))}</Text>
        </Body>
      </CardItem>
    </Card>
  );
};
