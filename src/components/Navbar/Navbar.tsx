'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { BiPlus, BiSolidUserCircle, BiSearchAlt } from 'react-icons/bi';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import './Navbar.css';
import { deleteCookie } from 'cookies-next';

const Navbar = () => {
  const [auth, setAuth] = useState<Boolean>(false);

  console.log(auth);

  async function checkLogin() {
    const response = await fetch('http://localhost:8000/auth/checklogin', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      setAuth(true);
    }
  }

  useEffect(() => {
    checkLogin();
  }, []);

  async function handleLogout() {
    await deleteCookie('authToken');
    await deleteCookie('refreshToken');
    window.location.href = '/auth/signin';
  }

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <Link href='/pages/profile' className='link'>
          <BiSolidUserCircle className='icon' />
        </Link>
        <Link href='/pages/addblog'>
          <BiPlus className='icon' />
        </Link>
        <Link href='/pages/search'>
          <BiSearchAlt className='icon' />
        </Link>
      </div>
      <div className='navbar-middle'>
        <Link href='/'>
          <Image className='logo' src={logo} alt='Picture of the company' />
        </Link>
      </div>
      <div className='navbar-right'>
        {auth ? (
          <>
            <Link href='/'>Home</Link>
            <Link href='/pages/about'>About</Link>
            <Link href='/pages/contact'>Contact</Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link href={'/auth/signin'}>Login</Link>
            <Link href={'/auth/signup'}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
