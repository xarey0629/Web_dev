import { Router } from "express";
import User from "../ScoreCard";

const deleteDB = async (req, res) => {
    try {
        await User.deleteMany({});
        console.log("Database cleared");
        res.json({ message: "Database cleared" });
    } catch (err) { console.log(err); }
};

const saveUser = async (req, res) => {
    // req.body contains anything in the request body. Typically this is used on PUT and POST requests. 
    // For example a POST to sample.com with the body of {"foo":"bar"} and a header of type application/json, 
    // req.body would contain {foo: "bar"}
    // 因為前端傳輸資料不是用params，而是直接傳一個object，所以要用req.body取得前端傳送的資料
    const name = req.body.name;
    const subject = req.body.subject;
    const score = req.body.score;

    const existing = await User.findOne({ name: name, subject: subject });
    if (existing){
        existing.score = score;
        await existing.save();
        await User.findOne({name: name}).catch((err) => {console.log(err)});
        console.log("updating:", existing);
        res.send({ message: `Updating (${name}, ${subject}, ${score})`, cards: existing });
    }
    else{
        try {
            const newUser = new User({  name,  subject, score });
            await newUser.save();
            console.log("adding:", newUser);
            res.send({message: `Adding (${name}, ${subject}, ${score})`, cards: newUser})
        } catch (e) { console.log(e);}
    }
};

const query = async(req, res) => {

    const queryType = req.query.type;
    const queryString = req.query.queryString;

    let filteredCards;
    if(queryType === 'name'){
        filteredCards = await User.find({ name: queryString }).catch(err => {
            console.log(err);
        });
    }
    else if (queryType === 'subject'){
        filteredCards = await User.find({ subject: queryString }).catch(err => {
            console.log(err);
        });
    }

    let messages = [];
    if (filteredCards) {
        filteredCards.forEach(card => messages.push(`Found card with ${queryType}: (${card.name}, ${card.subject}, ${card.score})`));
        res.send({ messages: messages, cards: filteredCards});
    } 
    else {
        res.send({ message: `${queryType} (${queryString}) not found!` });
    }


};



const router = Router();
router.delete("/cards", deleteDB);
router.post("/card", saveUser);
router.get("/cards", query);

export default router;

