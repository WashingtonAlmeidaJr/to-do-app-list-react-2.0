import { useState } from "react";
import { Empty } from "./Empty";
import { NewTask } from "./NewTask";
import { TaskList } from "./TaskList";
import styles from "./Tasks.module.css";

export function Tasks() {
    
const [tasks,setTasks]=useState([])

function onAddTask(newTask) {
    setTasks(
        [
            ...tasks,
            {   
                content:newTask,
                isDone:false
            }
        ]
    );
}

function onDelete(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(task => task.content !== taskToDelete.content)
    setTasks(tasksWithoutDeletedOne);
    console.log(tasksWithoutDeletedOne)
    console.log(taskToDelete)
}

function taskIsEmpty() {
//verifica se o array de tasks está vazio e renderiza o componente Empty ou o TaskList
if (tasks.length == 0) {
    return <Empty />;
} else {
    return (
    <main>
        {tasks.map((task=> {
        return (
                <TaskList  
                    key={task.content}
                    content={task.content} 
                    isDone={task.isDone} 
                    onDelete={onDelete}
                />
                );}))}
    </main>
    );

}
}


return (
<div className={styles.taskBoard}>
    <NewTask onAddTask={onAddTask} />
    <div className={styles.info}>
    <h4>Tarefas criadas </h4> <span>{tasks.length}</span>
    <h4> Tarefas concluidas </h4> <span>0</span>
    </div>
    <div className={styles.taskBoardContent}>{taskIsEmpty()}</div>
</div>
);
}
