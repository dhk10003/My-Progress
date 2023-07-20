import React from 'react'

const EmployeeListItem = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <img
        src="https://www.istockphoto.com/de/foto/multirassische-gruppe-junger-freunde-die-sich-im-freien-verbinden-gm1363627613-435117831"
        alt="cool dude"
      />
    </div>
  )
}

export default EmployeeListItem
