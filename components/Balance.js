import React from 'react';
import {CardItem, Body, Text} from 'native-base';

import {numberWithCommas} from '../utils/format';

import theme from '../theme';

export const Balance = ({total}) => {
  return (
    <CardItem style={theme.col4}>
      <Body>
        <Text note style={{alignSelf: 'center'}}>
          Balance
        </Text>
        <Text style={{...theme.highlight, alignSelf: 'center'}}>
          &#8377;{numberWithCommas(total)}
        </Text>
      </Body>
    </CardItem>
  );
};
