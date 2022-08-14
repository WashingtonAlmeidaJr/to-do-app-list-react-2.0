import styles from'./NewTask.module.css'
import{PlusCircle} from'phosphor-react'
import { useState } from 'react'
import { Tasks } from './Tasks'

export function NewTask({onAddTask}){

const [Typing,setTyping]=useState('')

function handleOnChange(event){
    setTyping(event.target.value) 
}

function handleOnCLick(event){
    event.preventDefault()
    event.target.setCustomValidity("");
    const newTask=Typing
    if(Typing!==''){onAddTask(newTask)}   
}

    return(
        <div className={styles.newTask}>
            <textarea placeholder='Adicione uma nova tarefa' onChange={handleOnChange}/>
            <button onClick={handleOnCLick}>Criar<PlusCircle size={22}/></button>
            
        </div>
    )
}

        