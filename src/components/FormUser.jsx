import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValuesUserForm'
import './styles/formUser.css'

const FormUser = ({createNewUser, updateInfo, updateUserById, showForm, handleShowForm}) => {

    const {register, reset, handleSubmit} = useForm()

    useEffect(() => {
        if(updateInfo){
            reset(updateInfo)
        }
       },[updateInfo])

    const submit = data =>{
        if(updateInfo){
            updateUserById(updateInfo.id, data)
        }else{
            createNewUser(data);
        }
        reset(defaultValues)
    }

  return (
    <form 
    onSubmit={handleSubmit(submit)} 
    className={`form_container ${!showForm && `form__show`}`}>
        <button onClick={handleShowForm}>x</button>
        <div>
            <label htmlFor="email">Email</label>
            <input {...register('email')} type="email" id='email' placeholder='example@example.com' required/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input {...register('password')} type="password" id='password' placeholder='1 - 128 Characters' required/>
        </div>
        <div>
            <label htmlFor="firstName">First Name</label>
            <input {...register('first_name')} type="text" id='firstName' placeholder='Type your name' required/>
        </div>
        <div>
            <label htmlFor="lastName">Last Name</label>
            <input {...register('last_name')} type="text" id='lastName' placeholder='Type your last name' required/>
        </div>
        <div>
            <label htmlFor="birthday">Birthday</label>
            <input {...register('birthday')} type="date" id='birthday' placeholder='' required/>
        </div>
        <button>{updateInfo ? 'Update info' : 'add'}</button>
    </form>
  )
}

export default FormUser