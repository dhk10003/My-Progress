import { useContext } from 'react'
import { StudentContext } from '../context/StudentContext'
import StudentItem from './StudentItem'

const StudentList = () => {
  const { students } = useContext(StudentContext)

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentItem key={student.id} student={student} />
      ))}
    </div>
  )
}

export default StudentList
