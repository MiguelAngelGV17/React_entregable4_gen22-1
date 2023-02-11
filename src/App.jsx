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
        // console.log(res.data)
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
        console.log(res);
      })
      .catch(err => console.log(err))
  }

  const handleShowForm = e => {
    e.preventDefault()
    setShowForm(!showForm)
  }
  console.log(updateInfo);

  return (
    <div className="app">
      <div>
        <h1>Users List</h1>
        <div className=
        {`
        ${!showForm && `app__icon-center`}
        ${updateInfo ? `app__icon-aside` : ``}
        `}>
        <button
          className={`app__btn-create ${showForm && `app__show-create`}`}
          onClick={handleShowForm}
          ><i className={`bx bxs-user-plus`}></i>
        </button>
        </div>
        <div>
          <FormUser
            createNewUser={createNewUser}
            updateUserById={updateUserById}
            updateInfo={updateInfo}
            showForm={showForm}
            handleShowForm={handleShowForm}
          />
        </div>
        <div>
          {
            users?.map(user => (
              <UserCard
                key={user.id}
                user={user}
                deleteUserById={deleteUserById}
                setUpdateInfo={setUpdateInfo}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default App
