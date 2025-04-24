import { API_URL } from "@/config/envs";

export interface Task {
    id:          number;
    title:       string;
    description: string;
    isDone:      boolean;
    createdAt:   Date;
}


export const fetchTasks = async () => {
    const url = `${API_URL}/tasks`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error al obtener las tareas");
        }
        const data: Task[] = await response.json();
        return data;
    } catch (error) {
        console.error("Error en fetchTasks:", error);
        throw error;
    }
};

export const createTask = async (task: Omit<Task, "id" | "createdAt" | "isDone">) => {
    const url = `${API_URL}/tasks`;
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error("Error al crear la tarea");
        }
        const data: Task = await response.json();
        return data;
    } catch (error) {
        console.error("Error en createTask:", error);
        throw error;
    }
};

export const updateTask = async (id: number, task: Partial<Omit<Task, "id" | "createdAt">>) => {
    const url = `${API_URL}/tasks/${id}`;
    try {
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        });
        if (!response.ok) {
            throw new Error("Error al actualizar la tarea");
        }
        const data: Task = await response.json();
        return data;
    } catch (error) {
        console.error("Error en updateTask:", error);
        throw error;
    }
};

export const deleteTask = async (id: number) => {
    const url = `${API_URL}/tasks/${id}`;
    try {
        const response = await fetch(url, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error("Error al eliminar la tarea");
        }
        return true;
    } catch (error) {
        console.error("Error en deleteTask:", error);
        throw error;
    }
};