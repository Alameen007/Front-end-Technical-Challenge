import { request, baseUrl } from '../utils'


export async function getStudents () {
  const url = `${baseUrl}/students/0/20`
  return request({
    url,
    method: 'get',
  })
}

export async function getStudentById (id) {
  const url = `${baseUrl}/students/basic-info?student-id=${id}`
  return request({
    url,
    method: 'get',
  })
}


export async function createStudent (params) {
  return request({
    url: `${baseUrl}/students`,
    method: 'post',
    data: params,
  })
}

export async function updateStudent (id, params) {
  return request({
    url: `${baseUrl}/students/${id}`,
    method: 'put',
    data: params,
  })
}

export async function deleteStudent (id) {
  return request({
    url: `${baseUrl}/basic-info?student-id=${id}`,
    method: 'delete',
  })
}
