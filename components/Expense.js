import React from 'react';
import {StyleSheet} from 'react-native';
import {CardItem, Body, Text} from 'native-base';

import {numberWithCommas} from '../utils/format';

const styles = StyleSheet.create({
  col4: {
    flex: 1,
    paddingHorizontal: 4,
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
    fontSize: 24,
  },
});

export const Expense = ({expense}) => {
  return (
    <CardItem
      style={{
        ...styles.col4,
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftColor: '#ccc',
        borderRightColor: '#ccc',
      }}>
      <Body>
        <Text>Expense</Text>
        <Text style={styles.highlight}>&#8377;{numberWithCommas(expense)}</Text>
      </Body>
    </CardItem>
  );
};
