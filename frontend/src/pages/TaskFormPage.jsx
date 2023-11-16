import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from "react-hot-toast";

function TaskFormPage() {

    const navigate = useNavigate()

    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const createdTask = async (e) => {
        e.preventDefault()
        const response = await fetch('http://127.0.0.1:8000/api/tasks/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify({
                title: e.target.title.value,
                description: e.target.description.value,
            })
        }
        )
        if (response.status === 201) {
            navigate('/tasks')
            toast.success('Task created', {
                position: 'bottom-center',
            })
        }
    }


    return (
        <div className='max-w-xl mx-auto'>
            <h2 className="font-bold text-3xl mb-4 text-center text-[#E1C78F]">Create your task</h2>
          <form onSubmit={createdTask}>
          <label className='font-semibold text-lg text-[#F4EAE0]'>Title</label>
              <input type="text" name="title" placeholder="Title" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-white'/>
              <label className='font-semibold text-lg text-[#F4EAE0]'>Description</label>
              <input type="text" name="description" placeholder="Description" className='bg-zinc-700 p-3 rounded-lg block w-full mb-3 text-white'/>
              <input type="submit" value='Create' className='bg-green-500 p-3 rounded-lg block w-1/2 mx-auto mt-3 cursor-pointer'/>
          </form>
      </div>
    )
}

export default TaskFormPage