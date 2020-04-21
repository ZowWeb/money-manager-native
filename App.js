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

import {Overview} from './components/Overview';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
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
            {/* Overview */}
            <Overview />

            {/* Transactions */}
            <TransactionList />

            {/* Add Transaction */}
            <AddTransaction />
          </Content>
        </ScrollView>
      </SafeAreaView>
    </GlobalProvider>
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
});

export default App;
