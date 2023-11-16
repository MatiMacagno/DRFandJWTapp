import React, { useState, useEffect } from 'react'
import { toast } from "react-hot-toast";

function TaskList() {

    const [tasks, setTasks] = useState([])
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const getTasks = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/tasks/', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        })
        if (response.ok) {
            const data = await response.json()
            setTasks(data)
        }
    }

    const deleteTask = async (id) => {
        const response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        toast.success('Task delete.', {
            position: 'bottom-center',
        })
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div className='max-w-xl mx-auto'>
            <h2 className="font-bold text-3xl mb-4 text-center text-[#E1C78F]">Your task list</h2>
            <ul>
                {tasks.map(task => ( 
                    <div key={task.id} className='text-[#F4EAE0] rounded-md p-2 mb-4 bg-zinc-700 border-2 border-[#E1C78F]'>
                        <li className='mb-3 mx-2'>
                            <h3 className='font-bold text-3xl mb-2'>{task.title}</h3>
                            <p className='font-sans mb-2'>{task.description}</p>
                            <p className='font-sans mb-2'>Completada: { task.completed ? 'Si' : 'No' }</p>
                            <button className='bg-red-500 px-3 py-2 rounded-lg mr-2 text-white font-bold' onClick={() => deleteTask(task.id)}>Delete</button>
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default TaskList