/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import './css/Board.css'
import Cell from './Cell';
import Modal from './Modal';
import Dashboard from './Dashboard';
import { revealed } from '../util/reveal';
import createBoard from '../util/createBoard';
import React, { useEffect, useState } from 'react';


const Board = ({ boardSize, mineNum, backToHome }) => {
    const [board, setBoard] = useState([]);                     // An 2-dimentional array. It is used to store the board.
    const [nonMineCount, setNonMineCount] = useState(boardSize*boardSize-mineNum);        // An integer variable to store the number of cells whose value are not '💣'.
    const [mineLocations, setMineLocations] = useState([]);     // An array to store all the coordinate of '💣'.
    const [gameOver, setGameOver] = useState(false);            // A boolean variable. If true, means you lose the game (Game over).
    const [remainFlagNum, setRemainFlagNum] = useState(10);      // An integer variable to store the number of remain flags.
    const [win, setWin] = useState(false);                      // A boolean variable. If true, means that you win the game.

    useEffect(() => {
        // Calling the function
        freshBoard();
    }, []);
    
    // useEffect(() => {
    //     let remainCnt = boardSize*boardSize-mineNum;
    //     for(let i = 0; i < boardSize; i++){
    //         for(let  j = 0; j < boardSize; j++){
    //             if(board[i][j].revealed === true){
    //                 remainCnt -= 1;
    //             }
    //             if(remainCnt === 0){
    //                 setWin(true);
    //             }

    //         }
    //     }
    // }, []);

    // Creating a board
    const freshBoard = () => {
        const newBoard = createBoard(boardSize, mineNum);
        // Basic TODO: Use `newBoard` created above to set the `Board`.
        // Hint: Read the definition of those Hook useState functions and make good use of them.
        setBoard(newBoard.board);
        // console.log(board);
    }

    const restartGame = () => {
        freshBoard();
        setGameOver(false);
        setWin(false);
    }

    // On Right Click / Flag Cell
    const updateFlag = (e, x, y) => {
        // To not have a dropdown on right click
        e.preventDefault();
        // Deep copy of a state
        let newBoard = JSON.parse(JSON.stringify(board));
        let newFlagNum = remainFlagNum;

        // Basic TODO: Right Click to add a flag on board[x][y]
        // Remember to check if board[x][y] is able to add a flag (remainFlagNum, board[x][y].revealed)
        let theCell = newBoard[x][y];
        if(theCell.revealed === true){
            return;
        }
        else if(theCell.revealed === false && theCell.flagged === false && newFlagNum !== 0){
            theCell.flagged = !theCell.flagged;
            newFlagNum -= 1;
        }
        else if(theCell.flagged === true){
            theCell.flagged = !theCell.flagged;
            newFlagNum += 1;
        }
        console.log(theCell.flagged);
        // Update board and remainFlagNum in the end
        setBoard(newBoard);
        setRemainFlagNum(newFlagNum);


        // console.log(theCell);
        // console.log(newBoard[x][y].flagged);
        
        

    };
    // 💣;
    const revealCell = (x, y) => {
        if (board[x][y].revealed || gameOver || board[x][y].flagged) return;
        let newBoard = JSON.parse(JSON.stringify(board));

        let theCell = newBoard[x][y];
        if (theCell.value === "💣" && theCell.revealed === false){
            theCell.revealed = !theCell.revealed;
            setTimeout(() => {setGameOver(!gameOver)},500);
            // console.log("Game Over? ",gameOver);
        }
        else if(theCell.value !== "💣" && theCell.revealed === false){
            theCell.revealed = !theCell.revealed;
            let recX = revealed(board, x, y, nonMineCount);
            newBoard = recX.board;
            // console.log("recX = ",recX.newNonMinesCount);
            setNonMineCount(recX.newNonMinesCount);
            if(recX.newNonMinesCount === 0){
                setWin(true)
                setTimeout(() => {
                    setGameOver(true);
                }, 500);
            }
            // console.log(nonMineCount);
        }
        setBoard(newBoard);
        // console.log("nonMineCoun = ", nonMineCount)

        // Basic TODO: Complete the conditions of revealCell (Refer to reveal.js)
        // Hint: If `Hit the mine`, check ...?
        //       Else if `Reveal the number cell`, check ...?
        // Reminder: Also remember to handle the condition that after you reveal this cell then you win the game.

    };
    return (
        <div className='boardPage' >
            <div className='boardWrapper' >
                {/* <h1>This is the board Page!</h1>  This line of code is just for testing. Please delete it if you finish this function. */}

                {/* Advanced TODO: Implement Modal based on the state of `gameOver` */}
                {gameOver ? <Modal restartGame={restartGame} backToHome={backToHome} win={win} board={board} mineNum={mineNum} setWin={setWin} setGameOver={setGameOver} gameOver={gameOver}/> : <div></div>}
                
                {/* Basic TODO: Implement Board 
                Useful Hint: The board is composed of BOARDSIZE*BOARDSIZE of Cell (2-dimention). So, nested 'map' is needed to implement the board.
                Reminder: Remember to use the component <Cell> and <Dashboard>. See Cell.js and Dashboard.js for detailed information. */}
                <div className='boardContainer'>
                    <Dashboard remainFlagNum={remainFlagNum} gameOver={gameOver}/>
                    {board.map(item => (
                        <div id={`row${item[0].x}`} style={{display:'flex'}}>
                            {item.map(cell => <Cell rowIdx={cell.x} colIdx={cell.y} detail={cell} updateFlag={updateFlag} revealCell={revealCell} />)}
                        </div>

                    ))
                    }
                </div>
            </div>
        </div>
    );



}

export default Board