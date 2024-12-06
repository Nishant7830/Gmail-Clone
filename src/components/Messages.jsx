import React from 'react'
import Message from './Message'
import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db} from '../firebase';
import { useDispatch, useSelector} from 'react-redux';
import { useEffect} from 'react';
import { setEmails} from './redux/appSlice';




const Messages = () => {
  const dispatch = useDispatch();
  const { emails} =useSelector(store =>store.app);


   useEffect(()=>{
    const q = query(collection(db, "emails"), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const allEmails = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      dispatch(setEmails(allEmails));
    });
    return () => unsubscribe(); 
   },[])
  return (
    <div>
    {
      emails && emails?.map((email) =><Message email={email}/>)
    }
      
    </div>
  )
}

export default Messages
