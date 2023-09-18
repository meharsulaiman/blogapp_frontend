"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import '../auth.css'
import {useForm } from 'react-hook-form'

import {  toast } from 'react-toastify';

export default function Signup() {
    const {register, handleSubmit,reset, formState: {errors}} = useForm();

    async function onSubmitHandler(data: any) {
        console.log(data)

        const response = await fetch('http://localhost:8000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const dataResponse = await response.json()

        if (response.ok) {
            toast.success(dataResponse.message);
            reset();
        }
        else {
            toast.error(dataResponse.message)
        }

        
    }

    console.log(errors)

    return (
        <div className='authout'>
            {/* <Navbar /> */}
            <div className='authin'>
                <div className='left'>

                </div>
                <div className='right'>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }} onSubmit={handleSubmit(onSubmitHandler)}>
                        <div className='forminput_cont'>
                            <label>Name</label>
                            <input type="text" placeholder='Enter Your Name' {...register("name", {required: 'Name is required'})}/>
                            {errors.name && <p className='error'>{errors?.name?.message?.toString()}</p>}
                        </div>
                        <div className='forminput_cont'>
                            <label>Email</label>
                            <input type="email" placeholder='Enter Your Email' {...register("email", {required: 'Email is required'})}/>
                            {errors.email && <p className='error'>{errors?.email?.message?.toString()}</p>}

                        </div>
                        <div className='forminput_cont'>
                            <label>Password</label>
                            <input type="text" placeholder='Enter Your Password' {...register("password", {required: 'Password is required'})}/>
                            {errors.password && <p className='error'>{errors?.password?.message?.toString()}</p>}
                        </div>
                        <div className='forminput_cont'>
                            <label>Confirm Password</label>
                            <input type="text" placeholder='Confirm Your Password' {...register("confirmPassword", {required: 'Confirm Password is required'})}/>
                            {errors.confirmPassword && <p className='error'>{errors?.confirmPassword?.message?.toString()}</p>}
                        </div>

                        <button type="submit" className="main_button">Register</button>
                        <p className='authlink'>Already have an account? <Link href="/auth/signin">login</Link></p>
                    </form>
                </div>

            </div>
        </div >
    )
}