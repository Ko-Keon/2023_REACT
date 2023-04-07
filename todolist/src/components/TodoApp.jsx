import { useState } from "react"

import './TodoApp.css'
import AllTodos from "./AllTodos"
import TodayTodos from "./TodayTodos"

const TodoApp = () => {

    const [todos, setTodos] = useState([
        {id : 1, name : "할 일 1", date : "4월5일"} , 
        {id : 2, name : "할 일 2", date : "4월5일"} ,
        {id : 3, name : "할 일 3", date : "4월5일"} ,
    ])
    

    const [inputName, setInputName] = useState("");

    let id = todos.length+1;


    
    // 메소드 작성
    const inputChange = (e)=>{setInputName(e.target.value)}

    const addTodo = ()=>{
        const newTodos = todos.concat(
            {
                id : id++, name : inputName, date : todayDate()
            }
        )
        setTodos(newTodos)
        setInputName("");
    }

    const deleteTodo = (id) => {
        const newTodos = todos.filter(
            (todo) => todo.id !== id
        )
        setTodos(newTodos)
    }

    const todayDate = () => {
        const now = new Date();
        const todayMonth = now.getMonth()+1;
        const todayDate = now.getDate();

        return todayMonth+"월" + todayDate+"일"
    }

    const [btnState,setBtnState] = useState("all")

    const allTodos =()=> {
        setBtnState("all")
    }

    const todayTodos =()=> {
        setBtnState("today")
    }

    const todolist = btnState==="all" ? todos : todos.filter(todo=>todo.date==todayDate())




    return(
        <div>
            <input type="text"
                onChange={inputChange}
                value={inputName}
                placeholder="할 일을 입력하세요"
            />
            <button
                className="inputBtn"
                onClick={addTodo}
            >+</button>
            <hr />
        
            
                
            <div>
                <button
                    onClick={allTodos}
                    className="btn1"
                >모든 할 일</button>
            
                <button
                    onClick={todayTodos}
                    className="btn2"
                >오늘 할 일</button>
            </div>

            <ul className="list">
            {
                todolist.map((todo)=><li 
                key={todo.id}
                className={todo.checked ? "on" : ""}
                >
                    
                    <p>{todo.date}</p>
                    <input type="checkbox" 
                        className="checkbox"
                        checked={(todo.checked)}
                        readOnly
                        onClick={()=>{
                            
                            const newTodos =  todos.map((t)=>{
                                if(todo.id !== t.id) {
                                    return t;
                                }
                                else {
                                    return{...t, checked: !t.checked}
                                }
                            })
                            setTodos(newTodos);
                        }}
                    />
                    {todo.name}
                    
                    <button
                        className="xBtn"
                        onClick={()=>{deleteTodo(todo.id)}}
                    >X
                    </button>
                </li>)
            }
            </ul>

            
        </div>
    )
}

export default TodoApp