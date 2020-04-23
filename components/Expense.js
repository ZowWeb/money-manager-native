import React from 'react';
import {CardItem, Body, Text} from 'native-base';

import {numberWithCommas} from '../utils/format';

import theme from '../theme';

export const Expense = ({expense}) => {
  return (
    <CardItem
      style={{
        ...theme.col4,
        borderWidth: 1,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftColor: '#ccc',
        borderRightColor: '#ccc',
      }}>
      <Text note>Expense</Text>
      <Text style={theme.highlight}>&#8377;{numberWithCommas(expense)}</Text>
    </CardItem>
  );
};
