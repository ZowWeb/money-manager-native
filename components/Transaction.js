import React, {useContext} from 'react';

import {Card, CardItem, Text, Body, Button, Icon} from 'native-base';

import {GlobalContext} from '../context/GlobalState';

import {numberWithCommas} from '../utils/format';

import theme from '../theme';

export const Transaction = ({transaction}) => {
  const {deleteTransaction} = useContext(GlobalContext);

  // Get sign
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <Card>
      <CardItem style={theme.row}>
        <Body style={theme.row}>
          <Text>{transaction.text}</Text>
          <Text note>
            {sign}&#8377;{numberWithCommas(Math.abs(transaction.amount))}
          </Text>
          <Button
            danger
            rounded
            onPress={() => deleteTransaction(transaction._id)}>
            <Icon name="trash" color="#fff" />
          </Button>
        </Body>
      </CardItem>
    </Card>
  );
};
