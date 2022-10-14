/****************************************************************************
  FileName      [ reveal.js ]
  PackageName   [ src/util ]
  Author        [ Cheng-Hua Lu ]
  Synopsis      [ This file states the reaction when left clicking a cell. ]
  Copyright     [ 2022 10 ]
****************************************************************************/

export const revealed = (board, x, y, newNonMinesCount) => {

    const limit = board.length - 1; 
  
    if(x < 0 || y < 0 || x > limit || y > limit){
      return { board, newNonMinesCount };
    }
    console.log(board[x][y].value);

    // if(board[x][y].revealed === true){
    //   return { board, newNonMinesCount };
    // }
    
    // board[x][y].revealed = true;
    // newNonMinesCount--;
    // console.log("newNonMinesCount = ", newNonMinesCount);
    
    if(board[x][y].value === 0){

      // Reach Margin?
      if((x === 0 && y === 0) || (x === 0 && y === limit) || (x === limit && y === limit) || (x === limit && y === 0)){

      }
      
      else if(x === 0){
        // 向右
        if(board[x][y+1].revealed === false && board[x][y+1].value !== "💣"){
          board[x][y+1].revealed = true;
          newNonMinesCount--;
          if(board[x][y+1].value === 0)
          newNonMinesCount = revealed(board, x, y+1, newNonMinesCount).newNonMinesCount
        }
        // 向下
        if(board[x+1][y].revealed === false && board[x+1][y].value !== "💣"){
          board[x+1][y].revealed = true;
          newNonMinesCount--;
          if(board[x+1][y].value === 0)
          newNonMinesCount = revealed(board, x+1, y, newNonMinesCount).newNonMinesCount
        }
        // 向左
        if(board[x][y-1].revealed === false && board[x][y-1].value !== "💣"){
          board[x][y-1].revealed = true;
          newNonMinesCount--;
          if(board[x][y-1].value === 0)
          newNonMinesCount = revealed(board, x, y-1, newNonMinesCount).newNonMinesCount
        }
      }

      else if(y === 0){
        // 向上
        if(board[x-1][y].revealed === false && board[x-1][y].value !== "💣"){
          board[x-1][y].revealed = true;
          newNonMinesCount--;
          if(board[x-1][y].value === 0)
          newNonMinesCount = revealed(board, x-1, y, newNonMinesCount).newNonMinesCount
        }
        // 向右
        if(board[x][y+1].revealed === false && board[x][y+1].value !== "💣"){
          board[x][y+1].revealed = true;
          newNonMinesCount--;
          if(board[x][y+1].value === 0)
          newNonMinesCount = revealed(board, x, y+1, newNonMinesCount).newNonMinesCount
        }
        // 向下
        if(board[x+1][y].revealed === false && board[x+1][y].value !== "💣"){
          board[x+1][y].revealed = true;
          newNonMinesCount--;
          if(board[x+1][y].value === 0)
          newNonMinesCount = revealed(board, x+1, y, newNonMinesCount).newNonMinesCount
        }
      }

      else if(x === limit){
        // 向上
        if(board[x-1][y].revealed === false && board[x-1][y].value !== "💣"){
          board[x-1][y].revealed = true;
          newNonMinesCount--;
          if(board[x-1][y].value === 0)
          newNonMinesCount = revealed(board, x-1, y, newNonMinesCount).newNonMinesCount
        }
        // 向右
        if(board[x][y+1].revealed === false && board[x][y+1].value !== "💣"){
          board[x][y+1].revealed = true;
          newNonMinesCount--;
          if(board[x][y+1].value === 0)
          newNonMinesCount = revealed(board, x, y+1, newNonMinesCount).newNonMinesCount
        }
        // 向左
        if(board[x][y-1].revealed === false && board[x][y-1].value !== "💣"){
          board[x][y-1].revealed = true;
          newNonMinesCount--;
          if(board[x][y-1].value === 0)
          newNonMinesCount = revealed(board, x, y-1, newNonMinesCount).newNonMinesCount
        }
      }

      else if(y === limit){
        // 向上
        if(board[x-1][y].revealed === false && board[x-1][y].value !== "💣"){
          board[x-1][y].revealed = true;
          newNonMinesCount--;
          if(board[x-1][y].value === 0)
          newNonMinesCount = revealed(board, x-1, y, newNonMinesCount).newNonMinesCount
        }
        // 向下
        if(board[x+1][y].revealed === false && board[x+1][y].value !== "💣"){
          board[x+1][y].revealed = true;
          newNonMinesCount--;
          if(board[x+1][y].value === 0)
          newNonMinesCount = revealed(board, x+1, y, newNonMinesCount).newNonMinesCount
        }
        // 向左
        if(board[x][y-1].revealed === false && board[x][y-1].value !== "💣"){
          board[x][y-1].revealed = true;
          newNonMinesCount--;
          if(board[x][y-1].value === 0)
          newNonMinesCount = revealed(board, x, y-1, newNonMinesCount).newNonMinesCount
        }
      }
      else if(x > 0 && y > 0 && x < limit && y < limit){
        // 向上
        if(board[x-1][y].revealed === false && board[x-1][y].value !== "💣"){
          board[x-1][y].revealed = true;
          newNonMinesCount--;
          if(board[x-1][y].value === 0)
            newNonMinesCount = revealed(board, x-1, y, newNonMinesCount).newNonMinesCount
        }
        // 向右
        if(board[x][y+1].revealed === false && board[x][y+1].value !== "💣"){
          board[x][y+1].revealed = true;
          newNonMinesCount--;
          if(board[x][y+1].value === 0)
          newNonMinesCount = revealed(board, x, y+1, newNonMinesCount).newNonMinesCount
        }
        // 向下
        if(board[x+1][y].revealed === false && board[x+1][y].value !== "💣"){
          board[x+1][y].revealed = true;
          newNonMinesCount--;
          if(board[x+1][y].value === 0)
          newNonMinesCount = revealed(board, x+1, y, newNonMinesCount).newNonMinesCount
        }
        // 向左
        if(board[x][y-1].revealed === false && board[x][y-1].value !== "💣"){
          board[x][y-1].revealed = true;
          newNonMinesCount--;
          if(board[x][y-1].value === 0)
          newNonMinesCount = revealed(board, x, y-1, newNonMinesCount).newNonMinesCount
        }
      }

      // // 向上
      // if(board[x-1][y].revealed === false && board[x-1][y].value !== "💣"){
      //   board[x-1][y].revealed = true;
      //   if(board[x-1][y].value === 0)
      //     revealed(board, x-1, y, newNonMinesCount)
      // }
      // // 向右
      // if(board[x][y+1].revealed === false && board[x][y+1].value !== "💣"){
      //   board[x][y+1].revealed = true;
      //   if(board[x][y+1].value === 0)
      //     revealed(board, x, y+1, newNonMinesCount)
      // }
      // // 向下
      // if(board[x+1][y].revealed === false && board[x+1][y].value !== "💣"){
      //   board[x+1][y].revealed = true;
      //   if(board[x+1][y].value === 0)
      //     revealed(board, x+1, y, newNonMinesCount)
      // }
      // // 向左
      // if(board[x][y-1].revealed === false && board[x][y-1].value !== "💣"){
      //   board[x][y-1].revealed = true;
      //   if(board[x][y-1].value === 0)
      //     revealed(board, x, y-1, newNonMinesCount)
      // }
    }
    else if(board[x][y].value > 0){
      board[x][y].revealed = true;
      newNonMinesCount--;
    }
    // Advanced TODO: reveal cells in a more intellectual way.
    // Useful Hint: If the cell is already revealed, do nothing.
    //              If the value of the cell is not 0, only show the cell value.
    //              If the value of the cell is 0, we should try to find the value of adjacent cells until the value we found is not 0.
    //              The input variables 'newNonMinesCount' and 'board' may be changed in this function.
  
    return { board, newNonMinesCount };
};
