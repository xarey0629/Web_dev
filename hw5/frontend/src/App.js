import { useState } from 'react';
import './App.css';
import { guess, startGame, restart } from './axios';

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [isError, setIsError] = useState(false);
  const [number, setNumber] = useState('');
  const [status, setStatus] = useState('');

  //
  // const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' });

  // const startGame = async () => {
  //   const { data: { msg } } = await instance.post('/start');
  //   return msg;
  // }

  // const guess = async (number) => {
  //   const { data: { msg } } = await instance.get('/guess', { params: { number } });
  //   return msg ;
  // }

  //

  const handleGuess = async () => {
    const response = await guess(number);

    if (response === 'Equal'){
      setHasWon(true);
    }

    else {
     setStatus(response);
     setNumber('');
    }
  }

  // 
  const startMenu = (
    <div>
      <button 
      // onClick = {someFunctionToBackend; and setHasStarted } 
      //            request server to random a number
        onClick={
          async () => {
            const msg = await startGame(setIsError);
            console.log(msg); //  The game is started;
            setHasStarted(true);
          }
        }> start game </button>
        {isError ? <div>Error, http status: 500, please restart the Server!</div> : <div></div>}
    </div>
  )

  // gaming!
  const gameMode = (
    <>
      <p>Guess a number between 1 to 100</p>
      <input   // Get the value from input
        onChange={(e) => {setNumber(e.target.value)}}
      ></input>
      <button  // Send number to backend
        onClick={handleGuess}
        disabled={!number} 
        >guess!</button> 
        <p>{status}</p>
    </>
  )
  
  // Win !
  const winningMode = (
    <>
      <p>You won! the number was {number}.</p>
      <button  // Handle restart for backend and frontend
        onClick={async () => {
          const msg = await restart(setIsError);
          console.log(msg); //  The game is restarted;
          setHasWon(false);
          setStatus('This is a new game!');
        }
      }
      >restart</button>
      {isError ? <div>Error, http status: 500, please restart the Server!</div> : <div></div>}
    </>
  )
  
  // game -> winningMode or gameMode
  const game = (
    <div>
      { hasWon? winningMode : gameMode}
    </div>
  )

  return (
    <div className='App'>
      {hasStarted ? game : startMenu}
    </div>
  );
}

export default App;
