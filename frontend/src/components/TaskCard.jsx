import { useNavigate } from "react-router-dom";
import OnImage from '../assets/on.png'
import OffImage from '../assets/off.png'
import { useState } from "react";
import { onComplete } from "../api/tasks.api";
import { toast } from "react-hot-toast";


export function TaskCard({task, onDelete}) {
    const navigate = useNavigate()
    const [completed, setCompleted] = useState(task.completed);
    const onToggleComplete = async () => {
        setCompleted(!completed);
        await onComplete(task.id, !completed);
        if(completed){
            toast.success('Task incompleted', {
                position: 'bottom-center',
            })
        } else {
            toast.success('Task completed', {
                position: 'bottom-center',
            })
        }
    };

    return (
        <div className="bg-zinc-700 p-3 flex flex-col rounded-lg">
            <h1 className="font-bold uppercase">{task.title}</h1>
            <p className="text-slate-400 whitespace-normal overflow-hidden break-words">Description: {task.description}</p>
            <button onClick={onToggleComplete} className="flex items-center text-slate-400">Completed: {completed ? <img className="ml-4 w-10 h-10" src={OnImage} alt="Completed" /> : <img className="ml-4 w-10 h-10" src={OffImage} alt="Incompleted"  />}</button>
            <div>
                <button className='bg-yellow-500 hover:bg-yellow-300 font-bold p-3 rounded-lg w-24 mr-4 mt-3 cursor-pointer' onClick={() => {
                    navigate(`${task.id}`)
                }}>Update</button>
                <button className='bg-red-500 hover:bg-red-300 font-bold p-3 rounded-lg w-24 mt-3 mr-4 cursor-pointer' onClick={onDelete}>Delete</button>
            </div>
        </div>
    )
}