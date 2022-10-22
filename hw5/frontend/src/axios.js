import axios from "axios";

const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' });

const startGame = async () => {
    try{
        const { data: { msg } } = await instance.post('/start');
        return msg;
    }
    catch(error){
        console.log('http status: 500, please restart the Server!');
        throw new Error('http status: 500, please restart the Server!')
        
    }
}

const guess = async (number) => {
    try{
        const { data: { msg } } = await instance.get('/guess', { params: { number } });
        return msg ;
    }
    catch(error){
        console.log(error.response.data.msg);
        return `${error.response.data.msg}`;
    }
}

const restart = async() => {
    try{
        const { data: { msg } } = await instance.post('/restart');
        return msg;
    }
    catch(error){
        console.log('http status: 500, please restart the Server!');
        throw new Error('http status: 500, please restart the Server!')
    }
};

export { startGame, guess, restart}