import express from 'express';
import { genNumber } from '../core/getNumber';

const router = express.Router()

let ranNum = 0;
router.post('/start', (_, res) => {
    ranNum = genNumber() // 用亂數產生一個猜數字的 number，存在 memory DB 
    console.log("Start game: The answer is: " + ranNum); // 伺服器端：通知遊戲開始並顯示答案
    res.json({ msg: 'The game has started.' }) // 回傳一個object
})

router.get('/guess', (req, res) => {
    
    // 去 (memory) DB 拿答案的數字
    const answer = ranNum;
    // console.log(answer);

    // 用 req.query.number 拿到前端輸入的數字
    const guessString = req.query.number;
    let guessNumber = 0;
    if(!isNaN(guessString)){
        guessNumber = parseInt(guessString);
        // console.log(typeof(guessNumber));
        console.log(guessNumber);
    }

    // check if NOT a num or not in range [1,100]
    // 如果有問題 =>
    // console.log(!isNaN(guessString));
    if(isNaN(guessString)){
        res.status(406).send({msg: 'Error: ' + guessString + ' is not a legal number (1 - 100).'});
    }
    else if(guessNumber < 1 || guessNumber > 100){
        res.status(406).send({msg: 'Error: ' + guessString + ' is not a legal number (1 - 100).'});
    }
    // 如果沒有問題，回傳 status
    else if(guessNumber <= 100 && guessNumber >= 1){
        // res.status(200).send({msg: 'Not a legal number.'});
        if(guessNumber === answer){
            res.send({msg: 'Equal'});
        }
        else if(guessNumber < answer){
            res.send({msg: 'Guess Bigger!'});
        }
        else if(guessNumber > answer){
            res.send({msg: 'Guess Smaller!'});
        }
    }

})

router.post('/restart', (_, res) => {
    ranNum = genNumber(); // reGen a number
    console.log("Restart: New answer is: " + ranNum); // 伺服器端：通知遊戲開始並顯示答案
    res.json({ msg: 'The game has restarted.' }) // 回傳一個object
})


export default router