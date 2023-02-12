import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setUpdateInfo] = useState()
  const [showForm, setShowForm] = useState(false)

  const getAllUsers = () => {
    const url = `https://users-crud.academlo.tech/users/`
    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const url = 'https://users-crud.academlo.tech/users/'
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserById = id => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log('The user was deleted successfully')
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => {
        getAllUsers()
        setUpdateInfo()
        console.log(res.data);
      })
      .catch(err => console.log(err))
  }

  const handleShowForm = e => {
    e.preventDefault()
    setShowForm(!showForm)
  }
  const handleOpen = () => setShowForm(!showForm)
  // const handleClose = () => setShowForm(false)

  return (
    <div className="app">
      <div >
        <div
          className={`${users?.length === 0
            ?
            `app__icon-center`
            :
            `app__icon-aside`}
        `}
        >
          <h1 className='app__title'>Users Form</h1>
          <button
            className={`app__btn-create ${showForm && `app__show-create`}`}
            onClick={handleShowForm}
          ><i 
          className={
            `bx bxs-user-plus
            ${users?.length === 0
            ?
            `size-center`
            :
            `size-aside`} 
          `}          
          >
          </i>
          </button>
        </div>
        <div >
          <FormUser
            createNewUser={createNewUser}
            updateUserById={updateUserById}
            updateInfo={updateInfo}
            showForm={showForm}
            handleShowForm={handleShowForm}
          />
        </div>
        <div className='user_card-container'>
          {
            users?.map(user => (
              <UserCard
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo}
                handleOpen={handleOpen}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
