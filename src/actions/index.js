export const GET_STUDENTS = "GET_STUDENTS"
export const GET_STUDENT = "GET_STUDENT"
export const ADD_STUDENT = "ADD_STUDENT"
export const UPDATE_STUDENT = "UPDATE_STUDENT"
export const DELETE_STUDENT = "DELETE_STUDENT"


export function getStudents () {
    return {
      type: GET_STUDENTS
    }
  }

export function getStudent ( id ) {
  return {
    type: GET_STUDENT,
    id
  }
}

export function addStudent ( student ) {
  return {
    type: ADD_STUDENT,
    student
  }
}

export function updateStudent ( student ) {
  return {
    type: UPDATE_STUDENT,
    student
  }
}

export function deleteStudent ( id ) {
  return {
    type: DELETE_STUDENT,
    id
  }
}
