import firebase from 'firebase';
import React, { useEffect, useRef, useState } from 'react';
import db from './firebase';
import HeaderOption from "./HeaderOption";
import InputOption from "./InputOption";
import Message from './Message';
function App() {
  //  to catch value from input field
  const [input, setInput]=useState('');
  // to show value on display
  const [masseges, setMassege] = useState([]);
  // to catch every people name in pupup
  const [username, setUsername] = useState(['']);

  const messageEl = useRef(null);



  

// useState such a variable it can do update also live
// useEffect suct a condition in react for runing code
useEffect(() => {
  // run once when app component is load
  //it read the detabase amd map 
  // it is such a lisenter
  db.collection('messages')
  .orderBy('timestamp', 'asc')
  .onSnapshot( snapshot =>(
    setMassege(snapshot.docs.map (doc => ({id:doc.id, message: doc.data()})))
  ));
 
 
}, [])



  useEffect(() => {
  setUsername(prompt("Eter your name please"));
   
  }, []) 

  // this is for scroll to top
  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])


// add to database
 const addMessege = (event) => {
  event.preventDefault();

//  all logic goes here
db.collection('messages').add({
message:input,
username:username,
timestamp: firebase.firestore.FieldValue.serverTimestamp ()

})

setInput('');

 }

 const handleChange = (event) => {
   event.preventDefault();
   setInput(event.target.value)
 
 }
 
 console.log(masseges);

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-indigo-50">
      <header className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
        <HeaderOption username={username}/>

     
        <div ref={messageEl}  className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
             

     {
     masseges.map(({id, message})=> (
        <Message key={id} username={username} message={message} />
     ))
     }
   

     </div>

        <InputOption  handleChange={handleChange} addMessege={addMessege}  value={input} />
  


      </header>
     
    </div>
  );
}

export default App;
