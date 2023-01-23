import {useContext} from 'react'
import { TaskContext } from '../context/TaskContext';
import TaskCard from './TaskCard'

const TaskList = () => {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h2 className='text-3xl font-bold text-white mt-5 text-center'>Theres nothing to show..</h2>
    }

    return (
        <>
            <div className=' menu bg-base-100 w-100 md:w-1/2 gap-4 p-2 m-auto capitalize flex flex-col '>
            <h2 className='text-4xl font-bold text-white mb-5 px-10'>Tasks</h2>
            
            <div className='lg:flex flex-col w-full lg:flex-row flex-wrap justify-center'>
                {tasks.map(task =>{
                    return <TaskCard
                    key={task.id}
                    task={task}
                    />
                })
                }
            </div>
            </div>
        </>
    )
}

export default TaskList;
