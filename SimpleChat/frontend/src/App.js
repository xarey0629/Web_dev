import { useState, useEffect, useRef } from 'react';
import './App.css';
import { Button, Input, Tag, message } from 'antd';
import useChat from './useChat';


function App() {

  const {status, messages, sendMessage, clearMessages} = useChat();
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');  // text body
  const bodyRef = useRef(null);
  
  const displayStatus = (s) => {
    if(s.msg){
      const {type, msg} = s; //解構賦值
      const content = {
        content:msg , duration: 0.5
      }
      switch(type){
        case "success" :
          message.success(content)
          break;
        case "error" :
        default:
          message.error(content)
          break;
      }
    }
  }

  useEffect(() => {
    displayStatus(status)
  }, [status]);

  return (
    <div className="App">
      <div className="App-title">
        <h1>Simple Chat</h1>
        <Button type="primary" danger onClick={clearMessages}>
          Clear
        </Button>
      </div>
      <div className="App-messages">
        {messages.length === 0 ? 
        <p style={{ color: '#ccc' }}>No messages...</p> :
        (messages.map(({name, body}, i) => (
          <p className="App-message" key={i}>
            <Tag color='blue'>{name}</Tag>
            {body}
          </p>
        )))
        }
        
      </div>
      <Input
        placeholder="Username"
        style={{ marginBottom: 10 }}
        value={username}
        onChange={(e) => {setUsername(e.target.value)}}
        onKeyDown={(e) => {
          if(e.key === 'Enter'){bodyRef.current.focus();}
        }}
      ></Input>
      <Input.Search
        ref={bodyRef}
        enterButton="Send"
        placeholder="Type a message here..."
        value={body}
        onChange={(e) => setBody(e.target.value)}
        onSearch={(msg) => {
          // Make sure is not empty
          if(!msg || !username){
            displayStatus({
              type: 'error',
              msg: 'Please enter a username and a message body.'
            })
            return;
          }
          sendMessage({name: username, body: msg})
          setBody(''); // 清空Body內容
          
        }}
      ></Input.Search>
    </div>
  )
}

export default App
