import { useContext } from 'react'
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
    
    const {deleteTask} = useContext(TaskContext);

    return (
        <div className="bg-sky-900 text-white p-5 "> 
            <h3 className='capitalize text-2xl md:text-4xl font-bold mb-5'>{task.tittle} </h3>
            <p className='text-gray-400'> {task.description} </p>
            <button onClick={() => deleteTask(task.id)} 
            className="bg-red-600 p-2 mt-5 hover:bg-red-100 hover:text-red-500 w-1/3 mx-auto">Eliminar</button>
        </div>
    );
}

export default TaskCard;
