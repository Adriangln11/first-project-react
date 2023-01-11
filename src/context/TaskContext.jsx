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
    function deleteTask(taskId){
        setTasks(tasks.filter(task => taskId !== task.id))
    }

    return (
        <TaskContext.Provider 
        value={{
                tasks,
                deleteTask,
                createTask
                }}>
            {props.children}
        </TaskContext.Provider>
    )
}

