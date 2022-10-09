import { isDisabled } from "@testing-library/user-event/dist/utils";
import "./../styles.css";


const Footer = ({data, setData, counter, setCounter, completed, visibility, setVisibility}) => {
    
    
    function clearCompleted(){
        setData(
            function(prev){
                var numOfDeleted = (prev.filter(item => item.completed === false).length);
                setCounter(numOfDeleted);
                return prev.filter(item => item.completed === false)
            }
            )
        }
        
        
    // Counter for clear button
    var numOfCompleted = (data.filter(item => item.completed === true).length);
    // console.log(numOfCompleted);
    

    // function filterActive(){
    //     setData(
    //         function(prev){
    //             console.log("Prev =", prev);
    //             return prev.filter(item => item.completed === false)
    //         }
    //     )
    // }

    // function filterCompleted(){
    //     setData(
    //         function(prev){
    //             console.log("Prev =", prev);
    //             return prev.filter(item => item.completed === false)
    //         }
    //     )
    // }




    return(
        <footer className = "todo-app__footer" id = "todo-footer" style={{visibility: counter === 0 ? "hidden" : "visible" }}>
            <div className="todo-app__total">
                <p>{counter} left</p>
            </div>
            <ul className="todo-app__view-buttons">
                <button onClick={() => setVisibility('SHOW_ALL')} disabled={visibility === 'SHOW_ALL'}>All</button>
                <button onClick={() => setVisibility('SHOW_ACTIVE')} disabled={visibility === 'SHOW_ACTIVE'}>Active</button>
                <button onClick={() => setVisibility('SHOW_COMPLETED')} disabled={visibility === 'SHOW_COMPLETED'}>Completed</button>
            </ul>
            <div className="todo-app__clean">
                <button onClick={clearCompleted} disabled={numOfCompleted === 0} >Clear completed</button>
            </div>
        </footer>
    )
}


export default Footer