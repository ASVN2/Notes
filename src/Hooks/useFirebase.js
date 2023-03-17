import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { useState, useReducer, UseEffect, useEffect } from 'react';
import { db } from '../firebase/config';
import useAuth from './useAuth';

// firebase imports

let initState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

export const firebaseReducer = (state, action) => {
  switch (action.type) {
    case 'IS_PENDING':
      return { isPending: true, document: null, error: null, success: false };
    case 'ADDED_DOC':
      return { isPending: false, document: action.payload, error: null, success: true };
    case 'ERROR':
      return { isPending: false, document: null, error: action.payload, success: false };
    case 'DELETED_DOC':
      return { isPending: false, document: action.payload, error: null, success: true };
    default:
      return state;
  }
};

export const Firebase = (col) => {
  const [response, dispatch] = useReducer(firebaseReducer, initState);
  const [isCancelled, setIsCancelled] = useState(false);

  // function check for is it isCancelled or not and then dispatch the action
  const dispatchCancelled = (action) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  let ref = collection(db, col);

  //add document
  const addDocument = async (mdoc) => {
    dispatch({ type: 'IS_PENDING' });

    try {
      const addedDoc = await addDoc(ref, mdoc);
      dispatchCancelled({ type: 'ADDED_DOC', payload: addedDoc });
    } catch (error) {
      console.log(error.message);
      dispatchCancelled({ type: 'ERROR', payload: error.message });
    }
  };

  // delted Doc

  const delDoc = async (id) => {
    dispatch({ type: 'IS_PENDING' });
    try {
      const deltedDoc = await deleteDoc(doc(db, col, id));
      dispatchCancelled({ type: 'DELETED_DOC', payload: deltedDoc });
    } catch (error) {
      console.log(error.message);
      dispatchCancelled({ type: 'ERROR', payload: error.message });
    }
  };

  return { Firebase, addDocument, delDoc, response };
};
