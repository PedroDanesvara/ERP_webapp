import { ApiGetUser, ApiSignIn } from "src/models/Auth"
import { useAPI } from "./api"
import { ApiGetPermisions } from "src/models/Permission"
import { ApiGetGroup, ApiGetGroups } from "src/models/Group"
import { ApiGetEmployee, ApiGetEmployees } from "src/models/Employee"
import { ApiGetTask, ApiGetTasks } from "src/models/Task"

const singIn = async ({ email, password }: {email: string, password: string}) => {
  const response = await useAPI<ApiSignIn>('auth/signin', 'POST', {email, password}, false)

  return response
}

const getUser = async () => {
  const response = await useAPI<ApiGetUser>('auth/user')

  return response
}

const getPermissions = async () => {
  const response = await useAPI<ApiGetPermisions>('companies/permissions')

  return response
}

const getGroups = async () => {
  const response = await useAPI<ApiGetGroups>('companies/groups')

  return response
}

const getAnGroup = async (id: number) => {
  const response = await useAPI<ApiGetGroup>(`companies/groups/${id}`)

  return response
}

const addGroup = async ({name, permissions}: {name: string, permissions: string}) => {
  const response = await useAPI('companies/groups', 'POST', { name, permissions })

  return response
}

const editGroup = async (id: number, {name, permissions}: {name: string, permissions: string}) => {
  const response = await useAPI(`companies/groups/${id}`, 'PUT', { name, permissions })

  return response
}

const deleteGroup = async (id: number) => {
  const response = await useAPI(`companies/groups/${id}`, 'DELETE')

  return response
}

const getEmployees = async () => {
  const response = await useAPI<ApiGetEmployees>('companies/employees')

  return response     
}

const getAnEmployees = async (id: number) => {
  const response = await useAPI<ApiGetEmployee>(`companies/employees/${id}`)

  return response     
}

const addEmployee = async ({name, email, password}: {name: string, email: string, password: string}) => {
  const response = await useAPI('companies/employees', 'POST', { name, email, password })

  return response
}

const editEmployee = async (id: number, {name, email, password}: {name: string, email: string, password: string}) => {
  const response = await useAPI(`companies/employees/${id}`, 'PUT', { name, email, password })

  return response
}

const deleteEmployee = async (id: number) => {
  const response = await useAPI(`companies/employees/${id}`, 'DELETE')

  return response
}

const getTasks = async () => {
  const response = await useAPI<ApiGetTasks>('companies/tasks')

  return response
}

const getAnTask = async (id: number) => {
  const response = await useAPI<ApiGetTask>(`companies/tasks/${id}`)

  return response
}

const addTask = async ({title, description, due_date, employee_id, status_id}: {title: string, description?: string, due_date?: string, employee_id: number, status_id: number}) => {
  const response = await useAPI<ApiGetTask>('companies/tasks', 'POST', { title, description, due_date, employee_id, status_id })

  return response
}

const editTask = async (id: number, {title, description, due_date, employee_id, status_id}: {title?: string, description?: string, due_date?: string, employee_id?: number, status_id?: number}) => {
  const response = await useAPI<ApiGetTask>(`companies/tasks/${id}`, 'PUT', { title, description, due_date, employee_id, status_id })

  return response
}

const deleteTask = async (id: number) => {
  const response = await useAPI<ApiGetTask>(`companies/tasks/${id}`, 'DELETE')

  return response
}

export const userRequests = () => ({
  singIn,
  getUser,
  getPermissions,
  getGroups,
  getAnGroup,
  addGroup,
  editGroup,
  deleteGroup,
  getEmployees,
  getAnEmployees,
  addEmployee,
  editEmployee,
  deleteEmployee,
  getTasks,
  getAnTask,
  addTask,
  editTask,
  deleteTask
})