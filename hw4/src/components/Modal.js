/****************************************************************************
  FileName      [ Modal.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Modal component. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import './css/Modal.css'
import React, { useEffect, useState } from "react";

export default function Modal({ restartGame, backToHome, win, board, mineNum, setWin, gameOver, setGameOver}) {
    const [render, setRender] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 1000);
    }, []);

    // useEffect(() => {
    //     let remainCnt = board.length * board.length - mineNum;
    //     for(let i = 0; i < board.length; i++){
    //         for(let  j = 0; j < board.length; j++){
    //             if(board[i][j].revealed === true){
    //                 remainCnt -= 1;
    //                 console.log(remainCnt);
    //             }
    //             if(remainCnt === 0 && gameOver === false){
    //                 setWin(true);
    //                 setGameOver(true);
    //             }

    //         }
    //     }
    // }, []);


    return (
        // Advanced TODO: Implement the structure of Modal
        // Useful Hint: style = {{opacity: 1 or 0 }}
        <div className='modal'>
            <div className='modalWrapper'></div>
            <div className='modalContent'>
                <div className='modalResult'>{win ? "WIN" : "Game Over"}</div>
                <div className='modalBtnWrapper'>
                    <div className='modalBtn' onClick={restartGame}>
                        {win ? "New Game" : "Try Again"}
                    </div>
                    <div className='modalBtn' onClick={backToHome}>
                        Back to Home
                    </div>
                </div>
            </div>
            <div className='modalWrapper'></div>
        </div>
        // {}
        
    );
}