import React from 'react';
import {CardItem, Body, Text} from 'native-base';

import {numberWithCommas} from '../utils/format';

import theme from '../theme';

export const Income = ({income}) => {
  return (
    <CardItem style={theme.col4}>
      <Body>
        <Text note>Income</Text>
        <Text style={theme.highlight}>&#8377;{numberWithCommas(income)}</Text>
      </Body>
    </CardItem>
  );
};
