import styles from'./TaskList.module.css'
import {Trash} from 'phosphor-react'
import { useState } from 'react'

export function TaskList({content,onDelete}){

    const [isDone,setIsDone]=useState('false')

    function handleOnChange (event){
        setIsDone(event.target.checked)
        console.log(isDone)
        return(<h3>{isDone}</h3>)
    }
    
    function onClick(event){
        event.preventDefault()
        const taskToDelete={content}
        onDelete(taskToDelete)
    }
    
 
    // function subTitle(){
    //     if (isDone === true) {
    //         alert("e aii")
    //     return <p key={content}>sdgfdhffhdf</p>;
    //     } else if (isDone === false) {
    //     return (
    //         <p key={content}>
    //         <a>dfghdfghfg</a>
    //         </p>
    //     );
    //     }
    // }

    return(
        <div className={styles.task}>
            <input className={styles.checkbox} type="checkBox" onChange={handleOnChange}/>
            <h3 key={content}>{content}</h3>
            {handleOnChange}
            <button onClick={onClick} className={styles.trashButton}><Trash size={20}/></button>
        </div>
    )
}