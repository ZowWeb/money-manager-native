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

export const Balance = ({total}) => {
  return (
    <CardItem style={styles.col4}>
      <Body>
        <Text>Balance</Text>
        <Text style={styles.highlight}>&#8377;{numberWithCommas(total)}</Text>
      </Body>
    </CardItem>
  );
};
