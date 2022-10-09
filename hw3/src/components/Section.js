import ListItem from "./ListItem";
import { useRef, useState } from "react";
import "./../styles.css";


let id = 1;

const Section = ({data, setData, counter, setCounter, visibility, setVisibility}) => {
    //counter to count number of list
    
    // Filter switcher
    function getVisibleTodos() {
        switch (visibility) {
            case "SHOW_COMPLETED":
                return data.filter(
                    todo => todo.completed
                );
            case "SHOW_ACTIVE":
                return data.filter(
                    todo => !todo.completed
                );
            case "SHOW_ALL":
            default:
                return data;
        }
    }

    //line-through
    const completed = useRef(false);
    
    // input each listitem
    const [words, setWords] = useState("");
    function wordsChange(e){
        setWords(e.target.value);
    }
    // create data, setData by useState
    // const [data, setData] = useState([]);
    
    function addToList(e){
        if(e.key === "Enter"){
            setData((prevData) => {
                return[
                    ...prevData,
                    {
                        words,
                        id,
                        completed: false
                    }
                ];
            });
            console.log(data);
            id++;


            setCounter((counter) => counter + 1);
            console.log("id = ", id);
            console.log("counter = ", counter);
            if(counter >= 0){
                console.log(document.getElementById("todo-footer").style.visibility="visible");
            }
            else{
                console.log(document.getElementById("todo-footer").style.visibility="hidden");
            }
            
            
        }
    }

    return(
        <section className = "todo-app__main">
            {/* Input chatbox */}
            <input className="todo-app__input" placeholder="What needs to be done? " value={words} onChange={wordsChange} onKeyPress={addToList}>
            </input>
            {/* List */}
            <ul className="todo-app__list" id="todo-list">
                {/* add to list */}
                {getVisibleTodos().map((item) => {
                    const {words, id, completed} = item;
                    return <ListItem note={words} id={id} completed={completed} deleteData={setData} counter={counter} setCounter={setCounter}/>
                })}
            </ul>
        </section>

    )
}

export default Section
