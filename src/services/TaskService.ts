import { ITask } from "@/interfaces/Task";
import axios from "./axios";

export const createTask = async (task: Pick<ITask, 'title'|'description'>) => await axios.post("tasks", task);
export const getTask = async (id: string) => await axios.get<ITask>(`/tasks/${id}`);
export const getTasks = async () => await axios.get<ITask[]>("tasks");
export const updateTask = async (data: Partial<ITask>) => await axios.put<ITask>(`/tasks/${data._id}`, data);
export const deleteTask = async (id: string) => await axios.delete(`/tasks/${id}`);
