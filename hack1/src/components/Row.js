/****************************************************************************
  FileName      [ Row.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Row. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import "./css/Row.css";
import React from 'react';


const Row = ({ guess, rowIdx ,turn}) => {
    // let letters = guess[rowIdx].split('');
    // let letters = guess[rowIdx];

    // 
    // console.log(rowIdx, turn);
    // console.log("letters", guess);
    // console.log("hello");

    return (
        <div className='Row-container'>
            {/* TODO 3: Row Implementation -- Row */}
            
            {/* ↓ Default row, you should modify it. ↓ */}
            <div className='Row-wrapper'>
                <div id={rowIdx+"-"+0} key={rowIdx+"-"+0} className={turn - 1 >= rowIdx ? 'Row-wordbox grey' : "Row-wordbox"}>{turn - 1 >= rowIdx ? guess.split("")[0] :<div></div>}</div>
                <div id={rowIdx+"-"+1} key={rowIdx+"-"+1} className={turn - 1 >= rowIdx ? 'Row-wordbox grey' : "Row-wordbox"}>{turn - 1 >= rowIdx ? guess.split("")[1] :<div></div>}</div>
                <div id={rowIdx+"-"+2} key={rowIdx+"-"+2} className={turn - 1 >= rowIdx ? 'Row-wordbox grey' : "Row-wordbox"}>{turn - 1 >= rowIdx ? guess.split("")[2] :<div></div>}</div>
                <div id={rowIdx+"-"+3} key={rowIdx+"-"+3} className={turn - 1 >= rowIdx ? 'Row-wordbox grey' : "Row-wordbox"}>{turn - 1 >= rowIdx ? guess.split("")[3] :<div></div>}</div>
                <div id={rowIdx+"-"+4} key={rowIdx+"-"+4} className={turn - 1 >= rowIdx ? 'Row-wordbox grey' : "Row-wordbox"}>{turn - 1 >= rowIdx ? guess.split("")[4] :<div></div>}</div>
            </div>
            {/* ↑ Default row, you should modify it. ↑ */}
        </div>
    )
}

export default Row;