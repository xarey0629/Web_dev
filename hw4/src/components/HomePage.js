/****************************************************************************
  FileName      [ HomePage.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Home page.  ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import './css/HomePage.css';
import React, { useState } from 'react';

const HomePage = ({ startGameOnClick, mineNumOnChange, boardSizeOnChange, mineNum, boardSize /* -- something more... -- */ }) => {
  const [showPanel, setShowPanel] = useState(false);      // A boolean variable. If true, the controlPanel will show.
  const [error, setError] = useState(false);              // A boolean variable. If true, means that the numbers of mines and the board size are invalid to build a game.

  {/* Advanced TODO: Implementation of Difficult Adjustment
                     Some functions may be added here! */}
  
  return (
    <div className='HomeWrapper'>
      <p className='title'>MineSweeper</p>
      {/* Basic TODO:  Implemen start button */}
      <button className='btn' onClick={startGameOnClick}>Start Game</button>
      {/* Advanced TODO: Implementation of Difficult Adjustment
      Useful Hint: <input type = 'range' min = '...' max = '...' defaultValue = '...'> 
      Useful Hint: Error color: '#880000', default text color: '#0f0f4b', invisible color: 'transparent' 
      Reminder: The defaultValue of 'mineNum' is 10, and the defaultValue of 'boardSize' is 8. */}
      <div className='controlContainer'>
        <button className='btn' onClick={() => {setShowPanel(!showPanel)}}>Difficulty Adjustment</button>
        {showPanel ? <div className='controlWrapper'>
          <div className='error'></div>
          <div className='controlPanel'>
            <div className='controlCol'>
              <p className='controlTitle'>Mines Number</p>
              <input type="range" step="1" min="5" max="20" defaultValue="10" value={mineNum} onChange={mineNumOnChange}></input>
              <p className='controlNum'>{mineNum}</p>
            </div>
            <div className='controlCol'>
            <p className='controlTitle'>Board Size (nxn)</p>
              <input type="range" step="1" min="8" max="15" defaultValue="8" value={boardSize} onChange={boardSizeOnChange}></input>
              <p className='controlNum'>{boardSize}</p>
            </div>
          </div>
        </div>: <div></div>}
      </div>
    </div>
  );

}
export default HomePage;   