import { useContext } from 'react'
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
    
    const {deleteTask} = useContext(TaskContext);
    const {editTask} = useContext(TaskContext);

    return (
        <div className="text-white p-5 border-base-200 border-2 lg:m-5"> 
            <h3 className='capitalize text-2xl font-bold mb-5'>{task.tittle} </h3>
            <p className='text-gray-400'> {task.description} </p>
            <div className='flex gap-2'>
                <button 
                onClick={() => deleteTask(task.id) }
                className="btn btn-outline btn-error mt-5 w-1/2">Delete</button>
                <button 
                className='btn btn-outline btn-warning mt-5 w-1/2'
                onClick={() => editTask(task.id) }>Edit</button>
            </div>
        </div>
    );
}

export default TaskCard;
