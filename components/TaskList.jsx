import styles from'./TaskList.module.css'
import {Trash} from 'phosphor-react'
import { useState } from 'react'

export function TaskList({content,onDelete}){

    const [isDone,setIsDone]=useState('false')

    function handleOnChange (event){
        setIsDone(event.target.checked)
        console.log(isDone)
    }
    
    function onClick(event){
        event.preventDefault()
        const taskToDelete={content}
        onDelete(taskToDelete)
    }
    
    return(
        <div className={styles.task}>
            <input className={styles.checkbox} type="checkBox" onChange={handleOnChange}/>
            <h3 key={content}>{content}</h3>
            <button onClick={onClick} className={styles.trashButton}><Trash size={20}/></button>
        </div>
    )
}