import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import connectDB from './db';
import User from '../models/ScoreCard';
import routes from '../models/routes/index';
import dotenv from "dotenv-defaults";

// dotenv.config();
connectDB();
 
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', routes);

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);

// const saveUser = async (id, name) => {
//     const existing = await User.findOne({ name });
//     if (existing) throw new Error(`data ${name} exists!!`); 
//     try {
//         const newUser = new User({ id, name });
//         console.log("Created user", newUser);
//         return newUser.save();
//     } catch (e) { throw new Error("User creation error: " + e); }
// };

// const db = mongoose.connection;
// db.on("error", (err) => console.log(err));
// db.once("open", async () => {
//   await deleteDB();
//   await saveUser(57, "Ric");
//   await saveUser(108, "Sandy");
//   await saveUser(77, "Peter");
// });

