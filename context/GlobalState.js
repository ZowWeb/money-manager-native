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
        'http://192.168.43.39:5000/api/v1/transactions',
      ).then(r => r.json());

      console.log('JSON data', res);

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.data.error,
      });
    }
  }

  // async function deleteTransaction(id) {
  //   dispatch({
  //     type: "LOADING",
  //   });

  //   try {
  //     await axios.delete(`/api/v1/transactions/${id}`);

  //     dispatch({
  //       type: "DELETE_TRANSACTION",
  //       payload: id,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: "TRANSACTION_ERROR",
  //       payload: err.response.data.error,
  //     });
  //   }
  // }

  // async function addTransaction(transaction) {
  //   dispatch({
  //     type: "LOADING",
  //   });

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     const res = await axios.post("/api/v1/transactions", transaction, config);

  //     dispatch({
  //       type: "ADD_TRANSACTION",
  //       payload: res.data.data,
  //     });
  //   } catch (err) {
  //     dispatch({
  //       type: "TRANSACTION_ERROR",
  //       payload: err.response.data.error,
  //     });
  //   }
  // }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        // deleteTransaction,
        // addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};