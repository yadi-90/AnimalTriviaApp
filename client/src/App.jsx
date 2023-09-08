import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
