import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
// import axios from "axios";

// const baseURL = "https://money-manager-backend.herokuapp.com";

// Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await fetch(
        'https://money-manager-backend.herokuapp.com/api/v1/transactions',
      ).then(r => r.json());

      console.log('JSON data', res);

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data,
      });
    } catch (err) {
      console.log('error payload (err): ',err)
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: 'Could not fetch data',
      });
    }
  }

  async function deleteTransaction(id) {
    console.log('delete this id ',id);
    dispatch({
      type: "LOADING",
    });

    const options = {
      method: 'delete',
      body: id,
    };

    try {
      await fetch(`https://money-manager-backend.herokuapp.com/api/v1/transactions/${id}`, options)

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: 'Can not do that',
      });
    }
  }

  async function addTransaction(transaction) {
    console.log('transaction data sending to server: ', transaction);
    dispatch({
      type: 'LOADING',
    });

    const options = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transaction),
    };

    try {
      const res = await fetch(
        'https://money-manager-backend.herokuapp.com/api/v1/transactions',
        options,
      ).then(r => r.json());
      console.log('res: ', res);

      dispatch({
        type: 'ADD_TRANSACTION',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
