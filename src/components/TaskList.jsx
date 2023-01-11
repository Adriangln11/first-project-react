import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard'

const TaskList = () => {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h2 className='text-3xl font-bold text-white mt-5 text-center'>No hay tareas...</h2>
    }

    return (
        <>
            <h2 className='text-4xl font-bold text-white mb-5 px-10'>Tareas</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 flex-wrap capitalize'>
            
               {tasks.map(task =>{
                return <TaskCard
                key={task.id}
                task={task}
                />
               })
               }
            </div>
        </>
    )
}

export default TaskList;
