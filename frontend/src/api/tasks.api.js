import axios from 'axios'

export async function getAllTasks () {
    
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const response = await axios.get('http://127.0.0.1:8000/api/tasks/', {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    return response
}

export async function getTask (id) {
    
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const response = await axios.get(`http://127.0.0.1:8000/api/tasks/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    return response
}



export async function deleteTask (id) {
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const response = await axios.delete(`http://127.0.0.1:8000/api/tasks/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    return response
}

export function createTask (task) {
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const response = axios.post('http://127.0.0.1:8000/api/tasks/', task, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    return response
}

export function updateTask (id, task) {
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const response = axios.put(`http://127.0.0.1:8000/api/tasks/${id}/`, task, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    return response
}

export async function onComplete(id) {
    
    const authTokens = JSON.parse(localStorage.getItem('authTokens'));
    const accessToken = authTokens ? authTokens.access : authTokens.refresh;

    const response = await axios.get(`http://127.0.0.1:8000/api/tasks/${id}/`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    });
    const currentTask = response.data;
    const updatedTask = { ...currentTask, completed: !currentTask.completed };
    await updateTask(id, updatedTask);
}