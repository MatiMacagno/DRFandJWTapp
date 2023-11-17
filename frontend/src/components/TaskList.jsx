import React, { useState, useEffect } from 'react'
import { toast } from "react-hot-toast";
import { getAllTasks, deleteTask } from '../api/tasks.api';
import { TaskCard } from './TaskCard';

function TaskList() {

    const [tasks, setTasks] = useState([])

    const handleDelete = async (id) => {
        await(deleteTask(id))
        setTasks(tasks.filter(task => task.id !== id));
        toast.success('Task deleted', {
            position: 'bottom-center',
          })
    }

    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks()
            setTasks(res.data)
        }
        loadTasks()
    }, [])

    return (
        <div className="grid grid-cols-1 max-w-2xl gap-3 mx-auto">
            {tasks.map((task) => (
                <TaskCard
                key={task.id} 
                task={task} 
                onDelete={() => handleDelete(task.id)}
                />
            ))}
        </div>
    )
}

export default TaskList