import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const fetch = (url, init) =>
window.fetch(url, init).then((res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.json().then((err) => {
      throw err;
    });
  }
});


function App() {
  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/questions');
      const questions = await response.json();
      console.log(questions);
    } catch (error) {
      console.error(error);
    }
  };
  
  fetchQuestions();

  return (
    <>
      <div>  
       <h1>Animal App</h1>
      </div>
   
    </>
  )
}



export default App
