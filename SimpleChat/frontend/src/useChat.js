import { useState } from "react";

const useChat = () => {  //user defined hook
   const [messages, setMessages] = useState([]);
   const [status, setStatus] = useState({});
    // 與後端建立ws連結
   const client = new WebSocket('ws://localhost:4000');
   // 前端接收資料(onmessage), define client.onmessage()
   client.onmessage = (byteString) => {
    const {data} = byteString;
    const [task, payload] = JSON.parse(data); // ['', {}]
    switch(task){
        case "init":{
            setMessages(payload);
            break;
        }
        case "output":{
            setMessages(
                [
                    ...messages,
                    ...payload
                ]
            );
            break;
        }
        case "status":{
            setStatus(payload);
            break;
        }
        case "cleared":{
            setMessages([]);
            break;
        }
        default: break;    
    }
   }

   // send data to backend
   const sendData = async(data) => {
    await client.send(JSON.stringify(data));
   }

   const sendMessage = (payload) => {
    
        // update messages and status
        // setMessages(
        //     [
        //     ...messages,
        //     payload
        //     ]
        // )
    
        // setStatus({
        //     type: "success",
        //     msg: "Message sent."
        // })

        sendData(["input", payload]);
        console.log(payload);
    }

    const clearMessages = () => {
        sendData(["clear"]);
        console.log("Send clear request.");
    };

return {
    status, messages, sendMessage, clearMessages
};
};

export default useChat;