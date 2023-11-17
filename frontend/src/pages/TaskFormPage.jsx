import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function TaskFormPage() {

  const navigate = useNavigate()

  const params = useParams()

  const { register, handleSubmit, formState: { errors }, setValue } = useForm()

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data)
      toast.success('Task updated', {
        position: 'bottom-center',
      })
    } else {
      await createTask(data)
      toast.success('Task created', {
        position: 'bottom-center',
      })
    }
    navigate('/tasks/')
  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTask(params.id)
        setValue('title', res.data.title)
        setValue('description', res.data.description)
      } else {
        setValue('title', '');
        setValue('description', '');
      }
    }
    loadTask()
  }, [params.id])


  return (
    <div className="max-w-xl mx-auto">
        {params.id ? <h2 className="font-bold text-3xl mb-4 text-center text-[#E1C78F]">Update Task</h2> : <h2 className="font-bold text-3xl mb-4 text-center text-[#E1C78F]">Create Task</h2>}
      <form onSubmit={onSubmit}>
        {params.id ? <label className="font-semibold text-[#F4EAE0]">Title</label> : null}
        <input
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          type="text"
          placeholder="Title"
          {...register('title', { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        {params.id ? <label className="font-semibold text-[#F4EAE0]">Description</label> : null}
        <textarea
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
          rows="3"
          placeholder="Description"
          {...register('description', { required: true })}
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button className="bg-green-500 p-3 rounded-lg block w-48 mt-3 font-bold hover:bg-green-300">Save</button>
      </form>
      {
        params.id &&
        <div className="flex justify-start">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3 font-bold hover:bg-red-300"
            onClick={async () => {
              const accepted = window.confirm('Are you sure?')
              if (accepted) {
                await deleteTask(params.id)
                toast.success('Task deleted', {
                  position: 'bottom-center',
                })
                navigate('/tasks/')
              }
            }}>Delete</button>
        </div>
      }
    </div>
  )
}