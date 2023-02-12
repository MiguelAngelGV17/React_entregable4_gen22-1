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
      <h2 className='user__card-title'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul>
        <li className='user_card-item'><span><i className='bx bxs-envelope'></i></span>{user.email}</li>
        <li className='user_card-item'><span><i className='bx bxs-calendar' ></i></span>{user.birthday}</li>
      </ul>
      <div className='user__card-options'>
        <i
          onClick={handleDelete}
          className='bx bxs-trash-alt'
        >
        </i>
        <i
          onClick={handleUpdate}
          className='bx bx-edit'>
        </i>
      </div>
    </article>
  )
}

export default UserCard