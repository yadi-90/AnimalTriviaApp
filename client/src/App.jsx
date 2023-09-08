import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RequestInfo, RequestInit } from 'node-fetch';

const fetch = (url, init) =>
  import('node-fetch').then(({ default: fetch }) => fetch(url, init));



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
