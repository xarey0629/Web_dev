/****************************************************************************
  FileName      [ Board.js ]
  PackageName   [ src/components ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file generates the Board. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

import Row from "./Row";
import './css/Board.css';
import React from "react";
import CurRow from "./CurRow";

const Board = ({ turn, guesses, curGuess }) => {
    // console.log("guess[0]", guesses[0])
    return (
        <div className="Board-container">
            {/* TODO 2-2: show 6 rows (map function is recommended) and defined row's key.
                Hint: Use `CurRow` instead of `Row` when you are passing `curGuess` into it. */}
            {turn === 0 ? <CurRow id={"row_0"} key={"row_0"} curGuess={curGuess} rowIdx={0} /> : <Row id={"row_0"} key={"row_0"} guess={guesses[0]} rowIdx={0} turn={turn}/>}
            {turn === 1 ? <CurRow id={"row_1"} key={"row_1"} curGuess={curGuess} rowIdx={1} /> : <Row id={"row_1"} key={"row_1"} guess={guesses[1]} rowIdx={1} turn={turn}/>}
            {turn === 2 ? <CurRow id={"row_2"} key={"row_2"} curGuess={curGuess} rowIdx={2} /> : <Row id={"row_2"} key={"row_2"} guess={guesses[2]} rowIdx={2} turn={turn}/>}
            {turn === 3 ? <CurRow id={"row_3"} key={"row_3"} curGuess={curGuess} rowIdx={3} /> : <Row id={"row_3"} key={"row_3"} guess={guesses[3]} rowIdx={3} turn={turn}/>}
            {turn === 4 ? <CurRow id={"row_4"} key={"row_4"} curGuess={curGuess} rowIdx={4} /> : <Row id={"row_4"} key={"row_4"} guess={guesses[4]} rowIdx={4} turn={turn}/>}
            {turn === 5 ? <CurRow id={"row_5"} key={"row_5"} curGuess={curGuess} rowIdx={5} /> : <Row id={"row_5"} key={"row_5"} guess={guesses[5]} rowIdx={5} turn={turn}/>}
            
        </div>
    )
};
export default Board;
