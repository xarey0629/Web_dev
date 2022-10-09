import { useState, useRef } from "react"
import Header from "../components/Header"
import Section from "../components/Section"
import Footer from "../components/Footer"

// container
const TodoApp = () => {

    //Create data, setData by useState
    const [visibility, setVisibility] = useState("SHOW_ALL");
    const [counter, setCounter] = useState(0);
    const [data, setData] = useState([]);
    
    return(
        <div className = "todo-app__root">
            <Header />
            <Section data={data} setData={setData} counter={counter} setCounter={setCounter} visibility={visibility} setVisibility={setVisibility}/>
            <Footer data={data} setData={setData} counter={counter} setCounter={setCounter} visibility={visibility} setVisibility={setVisibility}/>
        </div>
    )
}

export default TodoApp