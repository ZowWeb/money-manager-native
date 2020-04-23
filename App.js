/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';

import {Root, Content} from 'native-base';

import Navbar from './components/Navbar';
import Overview from './components/Overview';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Root>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{backgroundColor: '#f0f4ff'}}>
            <Navbar />
            <Content padder>
              <Overview />
              <TransactionList />
              <AddTransaction />
            </Content>
          </ScrollView>
        </SafeAreaView>
      </Root>
    </GlobalProvider>
  );
};

export default App;
