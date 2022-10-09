import React from "react";
import x from "../x.png";
import "./../styles.css";

const ListItem = ({note, id, completed, deleteData, counter, setCounter}) => {


    //delete Item from list
    function deleteItem(){
        deleteData(function (prev){
            // console.log(prev);
            return prev.filter(Item => Item.id !== id)
        }
        )

        if (completed === false){
            setCounter((counter) => counter - 1);
            // console.log("Counter after be deleted", counter);
        }
        // console.log("counter affte delete item ", counter)
    }

    //Completed or not
    function isCompleted(){
        // console.log("id - counter = ", id - counter);

        // 改變物件的completed 並回傳 
        deleteData(function (prev){
            return (prev.map(Item => (Item.id !== id) ? Item : {
                ...Item,
                completed: !Item.completed
            }
            )      
            );
        }
        )

        // if (completed === false){
        //     setCounter((counter) => counter - 1);
        // } 
        // else{
        //     setCounter(counter + 1);
        // }
    }

    return (
        <li className="todo-app__item" style={{
            //  visibility: completed ? 'hidden' : 'none'
        }}>
            <div className="todo-app__checkbox">
                <input type="checkbox" id={id} onClick={isCompleted} ></input>
                <label htmlFor={id} style={{background: completed ? '#26ca299b' : 'rgba(99, 99, 99, 0.698)'}}></label>
            </div>
            <h1 className="todo-app__item-detail"  style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    opacity: completed ? 0.5 : 1
                }}>{note}</h1>
            <img onClick={deleteItem} alt="" src={x} className="todo-app__item-x" />
        </li>
    )
}

export default ListItem