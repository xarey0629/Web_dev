const genNumber = () => {
    // if(!number || restart){
    //     let num
    //     number = Math.floor(< 1 ? 1 : )
    // }
    let number = Math.random()*100;
    let ranNum = Math.floor(number < 1 ? 1 : number);
    return ranNum; 
}

export {genNumber};
