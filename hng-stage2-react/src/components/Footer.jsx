import React from 'react'
import {FaLinkedinIn, FaGithub, FaInstagram,  FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";


function Footer() {
  return (
    <div className='w-full bottom-0 left-0 bg-(--beige) text-(--color-text)'>
      <div className='flex flex-row justify-between items-center px-10 pt-10'>
        <div className='flex flex-col text-left '>
          <h2 className='lg:text-3xl sm:text-xl md:text-2xl '>TixFirm</h2>
          <h1 className='sm:text-lg md:text-xl lg:text-xl'>Reliablility & Efficiency at a go</h1>
        </div>
        <div>
          <p className='lg:text-2xl sm:text-xs md:text-sm'>📍Nigeria</p>
        </div>
        <div className='flex flex-row lg:gap-6 lg:text-3xl sm:text-2xl md:text-2xl sm:gap-3 md:gap-4 cursor-pointer '>
          <a href="https://www.linkedin.com/in/abubakar-ado-garba-006255314" target='_blank'><FaLinkedinIn/></a>
          <a href="https://github.com/Sadiqag2001" target='_blank'><FaGithub/></a>
          <a href="https://instagram.com/sad33q_ag" target='_blank'><FaInstagram /></a>
          <a href="tel:+2347034723363" target='_blank'><FaPhone /></a>
          <a href="mailto:abubakaradogarba@gmail.com" target='_blank'><IoIosMail/></a>
        </div>
      </div>
      <p className='p-3 text-center lg:text-xl sm:text-xs md:text-sm  font-thin'>
        © TixFirm 2025
      </p>
    </div>
  )
}

export default Footer