import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Hero = () => {
    const navigate = useNavigate();
  return (
    <div>
    <section className='w-full max-w-[1440px] bg-(--color-text) h-screen pt-10 items-center text-(--beige) px-5 flex flex-col mx-auto gap-2'>
         <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-(--beige)/20 blur-md"></div>
             <div className="absolute top-20 left-40 w-24 h-24 rounded-full bg-(--beige)/20 blur-sm"></div>
             <div className="absolute top-60 left-80 w-24 h-24 rounded-full bg-(--beige)/20 blur-sm"></div>
             <div className="absolute top-80 left-100 w-24 h-24 rounded-full bg-(--beige)/20 blur-sm"></div>
             <div className="absolute top-100 left-40 w-24 h-24 rounded-full bg-(--beige)/20 blur-sm"></div>


      <main className='flex justify-between pt-5 w-full items-center flex-row gap-5'> 
        <div className='w-[65%] sm:w-full text-center'>
            <h2 className='font-northern sm:text-6xl md:text-9xl'>TixFirm</h2>
            <h1 className='lg:text-xl md:text-lg sm:text-lg'>Take control of every request with a ticketing solution designed for speed, clarity, and insight. Tix-Firm automates workflows, eliminates chaos, and empowers support teams to provide exceptional service—no matter the scale.</h1>
        </div>
        <div className='sm:w-full sm:items-center justify-center flex bg-(--color-text) flex-row gap-3'>
            <button  onClick={() => navigate("/login")} className='border cursor-pointer bg-(--beige) hover:bg-(--beige)/80 text-xl text-(--color-text) px-3 py-3 rounded-lg'>LOGIN</button>
            <button className='border cursor-pointer bg-(--beige) hover:bg-(--beige)/80 text-xl text-(--color-text) px-3 py-3 rounded-lg'>GET STARTED</button>
        </div>
      </main>
       <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        >
        <path
          fill="#e9dfc3"
          fillOpacity="1"
          d="M0,224L48,202.7C96,181,192,139,288,133.3C384,128,480,160,576,186.7C672,213,768,235,864,218.7C960,203,1056,149,1152,154.7C1248,160,1344,224,1392,256L1440,288V320H0Z"
          ></path>
      </svg>
    </section>
          </div>
  )
}

export default Hero
