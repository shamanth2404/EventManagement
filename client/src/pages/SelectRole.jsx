import React from 'react'

const roles = ["Vendor","Wedding Organiser","Guest"];

const SelectRole = () => {
  return (
    <div>
      {roles.map((role,index) => (<button>{role}</button>))}
    </div>
  )
}

export default SelectRole
