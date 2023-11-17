import React from 'react'
import TaskList from '../components/TaskList'

function TasksPage() {

  return (
    <>
      <h2 className="font-bold text-3xl mb-4 text-center text-[#E1C78F]">Your tasks</h2>
      <TaskList />
    </>
  )
}

export default TasksPage