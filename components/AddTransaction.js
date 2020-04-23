import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  H1,
  H3,
  Toast,
} from 'native-base';

import {GlobalContext} from '../context/GlobalState';

const styles = StyleSheet.create({
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

export default function AddTransaction() {
  const [text, setText] = useState('');
  const [minus, setMinus] = useState(1);
  const [amount, setAmount] = useState('');
  // const [loading, setLoading] = useState(false);

  const {addTransaction, loading, error} = useContext(GlobalContext);

  const onSubmit = async e => {
    e.preventDefault();

    if (text == '' || amount == '') {
      // TODO error handle
    } else {
      Toast.show({
        text: 'Give me un momento ...',
      });

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount * minus,
      };

      // Call the action
      await addTransaction(newTransaction);
      setText('');
      setAmount('');

      Toast.hide();
    }
  };

  return (
    <View style={styles.section}>
      <H1 style={styles.sectionTitle}>Add your transaction</H1>
      <Form>
        <Item stackedLabel style={styles.sectionDescription}>
          <Label>Text</Label>
          <Input
            placeholder="Salary"
            value={text}
            onChangeText={text => setText(text)}
          />
        </Item>
        <Item stackedLabel last style={styles.sectionDescription}>
          <Label>Amount</Label>
          <Input
            keyboardType="number-pad"
            placeholder="199"
            value={amount}
            onChangeText={amount => setAmount(amount)}
          />
        </Item>
        <Button
          full
          primary
          style={styles.section}
          onPress={onSubmit}
          disabled={loading || error !== null}>
          <Text> Add data </Text>
        </Button>
      </Form>
    </View>
  );
}
