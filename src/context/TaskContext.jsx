import { createContext, useEffect, useState } from 'react'
import {tasksArr} from '../tasks'

export const TaskContext = createContext()

export const TaskContextProvider = (props) => {

    const [tasks, setTasks] = useState([]);
    

    useEffect(() => {
        setTasks(tasksArr)
    }, [])

    function createTask(task){  
        setTasks([...tasks, {
            id: tasks.length,
            tittle: task.tittle,
            description: task.description
        }])
    }
    function editTask(taskId) {
        tasks.filter(task => {
            if (task.id === taskId) {
                
                const toEdit = {...task}
                const tittle = toEdit.tittle
                const description = toEdit.description
                document.querySelector('input').value = tittle
                document.querySelector('textarea').value = description
            }
        })
    }
    function deleteTask(taskId){
        setTasks(tasks.filter(task => taskId !== task.id))
    }

    return (
        <TaskContext.Provider 
        value={{
                tasks,
                deleteTask,
                createTask,
                editTask
                }}>
            {props.children}
        </TaskContext.Provider>
    )
}

