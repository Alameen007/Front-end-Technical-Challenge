import { request, baseUrl } from '../utils'

const storage = localStorage.getItem('user')
const user = JSON.parse(storage)


export async function getStudents () {
  const url = `${baseUrl}/students/0/20`
  return request({
    url,
    method: 'get',
  })
}
export async function getTasks () {
  const url = `${baseUrl}/tasks/${user._id}`
  return request({
    url,
    method: 'get',
  })
}

export async function createStudent (params) {
  return request({
    url: `${baseUrl}/student`,
    method: 'post',
    data: params,
  })
}

export async function updateStudent (id, params) {
  return request({
    url: `${baseUrl}/student/${id}`,
    method: 'put',
    data: params,
  })
}

export async function deleteStudent (id) {
  return request({
    url: `${baseUrl}/basic-info?student_id=${id}`,
    method: 'delete',
  })
}
