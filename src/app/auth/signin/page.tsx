"use client"
import { checkLogin } from '@/utils/checkLogin';
import Link from 'next/link'
import {useForm } from 'react-hook-form'
import {  toast } from 'react-toastify';


export default function Signin() {
    const {register, handleSubmit,reset, formState: {errors}} = useForm();

    async function onSubmitHandler(data: any) {
        console.log(data)
        
        const response = await fetch('http://localhost:8000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            credentials: 'include'
        })
        console.log(response)
        const dataResponse = await response.json()

        if (response.ok) {
            toast.success(dataResponse.message);
            checkLogin();
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
                            <label>Email</label>
                            <input type="email" placeholder='Enter Your Email' {...register("email", {required: 'Email is required'})}/>
                            {errors.email && <p className='error'>{errors?.email?.message?.toString()}</p>}
                        </div>
                        <div className='forminput_cont'>
                            <label>Password</label>
                            <input type="text" placeholder='Enter Your Password' {...register("password", {required: 'Password is required'})}/>
                            {errors.password && <p className='error'>{errors?.password?.message?.toString()}</p>}
                        </div>
                      
                        <button type="submit" className="main_button">Login</button>
                        <p className='authlink'>Dont have an account? <Link href="/auth/signup">Register</Link></p>
                    </form>
                </div>

            </div>
        </div >
    )
}