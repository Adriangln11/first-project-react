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
            <form onSubmit={handleSubmit} className="group-relative p-10 bg-sky-900 max-w-lg m-auto">
                <h1 className='text-4xl font-bold text-white mb-5'>Añadir tarea</h1>

                <input type="text" placeholder="Escribe tu tarea..." 
                required
                onChange={(e) => setTittle(e.target.value)}
                value={tittle}
                autoFocus
                className='w-full h-10 px-2 text-gray-500'
                />
                <textarea cols="30" rows="4" placeholder='Descripcion...'
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="w-full mt-5 p-2 text-gray-500">
                </textarea>
                <button
                className='bg-sky-500 text-white hover:text-sky-500 hover:bg-white mt-10 p-2'>Guardar</button>
            </form>
    );
}

export default TaskForm;
