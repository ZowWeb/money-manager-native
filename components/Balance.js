import React from 'react';
import {CardItem, Body, Text} from 'native-base';

import {numberWithCommas} from '../utils/format';

import theme from '../theme';

export const Balance = ({total}) => {
  return (
    <CardItem style={theme.col4}>
      <Text note>Balance</Text>
      <Text style={theme.highlight}>&#8377;{numberWithCommas(total)}</Text>
    </CardItem>
  );
};
