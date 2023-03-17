import { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import useAuth from './useAuth';

//firebase importes
import { collection, onSnapshot, query, orderBy, where } from 'firebase/firestore';

const UseCollection = (col) => {
  const [docs, setDocs] = useState('');
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    let docRef = collection(db, col);
    let q = query(docRef, where('uid', '==', user.uid), orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(q, (snt) => {
      let data = [];
      snt.docs.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      setDocs(data);
    });
  }, [col]);

  return { docs, error };
};

export default UseCollection;
