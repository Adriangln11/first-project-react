import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'




function App() {

  
  return (
    <main className='bg-sky-800 h-full'>
      <div className=" mx-auto p-5 min-h-screen">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App
