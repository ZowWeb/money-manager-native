import React from 'react';
import {Header, Button, Left, Right, Icon, Body, Title} from 'native-base';

export default function Navbar() {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
  );
}
