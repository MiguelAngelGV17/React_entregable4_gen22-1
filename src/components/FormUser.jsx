import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValuesUserForm'
import './styles/formUser.css'

const FormUser = ({ createNewUser, updateInfo, updateUserById, showForm, handleShowForm }) => {

    const { register, reset, handleSubmit } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])

    const submit = data => {
        if (updateInfo) {
            updateUserById(updateInfo.id, data)
        } else {
            createNewUser(data);
        }
        reset(defaultValues)
    }

    return (
        <form
            onSubmit={handleSubmit(submit)}
            className={` ${showForm && `form__user form`}`}>
            <div className={`form__container ${!showForm && `form__show`}`}>
                <button
                    >
                    <i onClick={handleShowForm} className='bx bx-message-square-x bx-flip-horizontal close__form' ></i>
                </button>
                <div className='form__item'>
                    <label htmlFor="email">Email</label>
                    <input {...register('email')} 
                    type="email" 
                    id='email' 
                    placeholder='example@example.com' 
                    required />
                </div>
                <div className='form__item'>
                    <label htmlFor="password">Password</label>
                    <input {...register('password')} 
                    type="password" 
                    id='password' 
                    placeholder='4 - 128 Characters' 
                    required />
                </div>
                <div className='form__item'>
                    <label htmlFor="firstName">First Name</label>
                    <input {...register('first_name')} 
                    type="text" 
                    id='firstName' 
                    placeholder='Type your name' 
                    required />
                </div>
                <div className='form__item'>
                    <label htmlFor="lastName">Last Name</label>
                    <input {...register('last_name')} 
                    type="text" 
                    id='lastName' 
                    placeholder='Type your last name' 
                    required />
                </div>
                <div className='form__item'>
                    <label htmlFor="birthday">Birthday</label>
                    <input {...register('birthday')} 
                    type="date" 
                    id='birthday' 
                    placeholder='' 
                    required />
                </div>
                <button className='form__btn-submit'>
                    {updateInfo
                        ?
                        'Update Info'
                        :
                        'Add User'}
                </button>
            </div>
        </form>
    )
}

export default FormUser