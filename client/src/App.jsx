import Header from './components/header.jsx';
import UserForm from './components/user.jsx';
import Game from './components/game.jsx';
import logoImage from '/logoImage.png';
import './App.css';
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const handleUser = (text) =>{
    setUser(text);
  }

  return (
    <>
    <div>
      <h1>AnimalKnow Game</h1>
      <img src={logoImage} alt="logo" />
    </div>
    <div className="App">
    <Header user={user} />
    <UserForm grabUser={handleUser} />
    {user ? <Game /> : null}
      
    </div>
    </>
  );
}

export default App;