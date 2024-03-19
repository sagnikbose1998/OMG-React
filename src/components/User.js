import React from 'react'

const User = (props) => {
  return (
    <div className='user-card'>
        <h2>Name : {props.name} </h2>
        <h3>Location : Kolkata </h3>
        <h3>Contact : @sagnik@gmail.com</h3>
    </div>
  )
}

export default User