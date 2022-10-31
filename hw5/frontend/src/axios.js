import axios from "axios";

const instance = axios.create({ baseURL: 'http://localhost:4000/api/guess' });

const startGame = async (setIsError) => {
    try{
        const { data: { msg } } = await instance.post('/start');
        setIsError(false);
        return msg;
    }
    catch(error){
        console.log('http status: 500, please restart the Server!');
        setIsError(true);
        throw new Error('http status: 500, please restart the Server!');
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

const restart = async(setIsError) => {
    try{
        const { data: { msg } } = await instance.post('/restart');
        setIsError(false);
        return msg;
    }
    catch(error){
        console.log('http status: 500, please restart the Server!');
        setIsError(true);
        throw new Error('http status: 500, please restart the Server!')
    }
};

export { startGame, guess, restart}