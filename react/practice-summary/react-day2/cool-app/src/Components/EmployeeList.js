import React from 'react'
import EmployeeListItem from './EmployeeListItem'

const EmployeeList = () => {
  return (
    <div>
      <ul className="list-group">
        <EmployeeListItem
          className="list-group-item"
          name="John Smith"
          description="Awesome person!"
        />
        <EmployeeListItem
          className="list-group-item"
          name="Adam Powell"
          description="Even more awesome person!"
        />
        <li className="list-group-item">Anna Rodriguez</li>
        <li className="list-group-item">Amanda Apple</li>
      </ul>
    </div>
  )
}

export default EmployeeList
