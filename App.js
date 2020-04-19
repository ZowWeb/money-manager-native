/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Button,
  Text,
  Left,
  Right,
  Icon,
  Body,
  Title,
  H1,
  H3,
} from 'native-base';

import {Form, Item, Input, Label} from 'native-base';

// import {GlobalProvider} from './context/GlobalState';

const App = () => {
  const getdata = () => {
    console.log('requesting...');
    fetch('http://192.168.43.39:5000/api/v1/transactions')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
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
          <Content padder>
            <Card style={{...styles.row, justifyContent: 'center'}}>
              <CardItem style={styles.col4}>
                <Body>
                  <Text>Income</Text>
                  <Text style={styles.highlight}>$900</Text>
                </Body>
              </CardItem>
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
                  <Text style={styles.highlight}>$600</Text>
                </Body>
              </CardItem>
              <CardItem style={styles.col4}>
                <Body>
                  <Text>Balance</Text>
                  <Text style={styles.highlight}>$300</Text>
                </Body>
              </CardItem>
            </Card>

            {/* Transactions */}
            <View style={styles.section}>
              <H1 style={styles.sectionTitle}>List of transactions</H1>
              <Card>
                <CardItem style={styles.row}>
                  <Body style={styles.row}>
                    <Text>Cinema</Text>
                    <Text>-$30</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem style={styles.row}>
                  <Body style={styles.row}>
                    <Text>Home</Text>
                    <Text>-$100</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card>
                <CardItem style={styles.row}>
                  <Body style={styles.row}>
                    <Text>Return</Text>
                    <Text>$80</Text>
                  </Body>
                </CardItem>
              </Card>
            </View>

            {/* Add Transaction */}
            <View style={styles.section}>
              <H1 style={styles.sectionTitle}>Add your transaction</H1>
              <Form>
                <Item stackedLabel style={styles.sectionDescription}>
                  <Label>Text</Label>
                  <Input />
                </Item>
                <Item stackedLabel last style={styles.sectionDescription}>
                  <Label>Amount</Label>
                  <Input />
                </Item>
                <Button full primary style={styles.section} onPress={getdata}>
                  <Text> Get data </Text>
                </Button>
              </Form>
            </View>
          </Content>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eee',
  },
  body: {
    backgroundColor: '#fff',
  },
  container: {
    paddingHorizontal: 16,
    marginTop: 8,
  },
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
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

export default App;
