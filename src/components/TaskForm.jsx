import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


const TaskForm = () => {

    const {createTask} = useContext(TaskContext)

    const [tittle, setTittle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            tittle, description
        })
        setDescription("")
        setTittle("")
    }
    return (
            <form onSubmit={handleSubmit} className="flex flex-col p-10 bg-base-100 md:w-1/2  m-auto">
                <h1 className='text-4xl font-bold text-center text-white mb-5'>Task Manager</h1>

                <input type="text" placeholder="task tittle..." 
                required
                onChange={(e) => setTittle(e.target.value)}
                value={tittle}
                autoFocus
                className='input w-full max-w-xs m-auto'
                />
                <textarea  rows="4" placeholder='task description...'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="textarea mt-5  w-70">
                </textarea>
                <button
                className='btn btn-outline btn-info mt-5'>Add</button>
            </form>
    );
}

export default TaskForm;
