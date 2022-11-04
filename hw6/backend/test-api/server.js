import mongoose from 'mongoose';
mongoose
    .connect('mongodb+srv://xarey0629:redfire0629@cluster0.a12vhb7.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
// 把剛剛在 Mongoose Atlas copy 的 URI 貼在這裡，改掉 <password>
    .then((res) => console.log("mongo db connection created"));

// import express from 'express';
// const app = express();
// const port = process.env.PORT || 4000;

// app.listen(port, () =>
// console.log(`Example app listening on port ${port}!`),
// );
// app.get('/', (req, res) => {
//     res.send('Received a GET HTTP method');  
// });
// app.post('/', (req, res) => {
//     res.send('Received a POST HTTP method');
// });
// app.put('/', (req, res) => {
//     res.send('Received a PUT HTTP method');
// });
// app.delete('/', (req, res) => {
//     res.send('Received a DELETE HTTP method');
// });
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });