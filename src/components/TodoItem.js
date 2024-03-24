import styles from './todoItem.module.css'

export default function({item,todos,setTodos}){
    const handleDelete=(item)=>{
        console.log('delete button clicked for item',item);
        setTodos(todos.filter((todo)=>todo !==item));//this checks if the the todo in the todos array is not equals to the item, if its not the thesame it is returned my the filter method
    }

    const handleClick = (name) =>{
        const newArray = todos.map((todo)=>todo.name===name?{...todo,done:!todo.done}:todo);
        setTodos(newArray);
    }

    const completedTask = item.done?styles.completed: "";//if item.done is true the className = complete and the styles from the module style sheet, else the class name will be empty

    return(
        <div className={styles.item}>
            <div className={styles.itemName}>
                <span className={completedTask} onClick={()=>handleClick(item.name)}>{item.name}</span>
                <span>
                    <button onClick={()=>handleDelete(item)} className={styles.deleteBtn}>x</button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    )
}