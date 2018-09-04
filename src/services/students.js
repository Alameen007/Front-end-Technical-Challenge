import { request, baseUrl } from '../utils'


export async function getStudents () {
  const url = `${baseUrl}/students/0/100`
  return request({
    url,
    method: 'get',
  })
}
export async function searchedStudents (data) {
  const { searchToken } = data
  const url = `${baseUrl}/students/search?id=${searchToken}`
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
    url: `${baseUrl}/students/`,
    method: 'post',
    data: params,
  })
}

export async function updateStudent (id, params) {
  console.log(params)
  return request({
    url: `${baseUrl}/students`,
    method: 'put',
    data: params,
  })
}

export async function deleteStudent (id) {
  return request({
    url: `${baseUrl}/students/basic-info?student-id=${id}`,
    method: 'delete',
  })
}
