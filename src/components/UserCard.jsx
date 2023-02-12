import React from 'react'
import './styles/userCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpen, showForm, setShowForm }) => {

  const handleDelete = () => deleteUserById(user.id)
  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpen()
  }


  return (
    <article className='user__card'>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li><span>Email: </span>{user.email}</li>
        <li><span>Birthday: </span>{user.birthday}</li>
      </ul>
      <i
        onClick={handleDelete}
        className='bx bxs-trash-alt'
      >
      </i>
      <i
        onClick={handleUpdate}
        className='bx bx-edit'>
      </i>
    </article>
  )
}

export default UserCard