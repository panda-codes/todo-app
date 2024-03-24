import { useState } from "react"
import styles from './form.module.css'

export default function Form({todos,setTodos}){

    // const [todo,setTodo] = useState('');its not sufficient to save both name and status of the task
    const [todo,setTodo] = useState({name:'',done:false})
    function handleTodo(e){
        setTodo({name:e.target.value,done:false});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos,todo]);//[] you cant just return a string you have to return and array and use the spread operator to keep adding todo values to the todos array
        setTodo({name:'',done:false});
    }

    return (
    <div>
        
            <form className={styles.todoform} onSubmit={(e)=>handleSubmit(e)}> {/* onSubmit is used on the form itself and not the button */}
                <div className={styles.inputContainer}>
                    <input className={styles.modernInput} placeholder="Enter Todo Item" onChange={(e)=>handleTodo(e)}  type="text" value={todo.name} />
                    <button className={styles.modernButton} type="submit">Add</button>
                </div>
            </form>
    </div>
    )
}

