import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

  return (
    <div className="z-30 top-0 left-0 w-full flex items-center bg-(--beige) justify-between p-5">
        <div className='flex flex-col cursor-pointer'>
            <h2 className='text-3xl'>TixFirm</h2>
        </div>
        <div className="hidden lg:flex gap-6 cursor-pointer items-center text-(--color-text)">
        <p onClick={() => navigate("/")} className="hover:text-(--color-text)/80">
          Home
        </p>
        <p onClick={() => navigate("/explore")} className="hover:text-(--color-text)/80">
          Dashboard
        </p>
        <p
          onClick={() => navigate("/favourites")}
          className="hover:text-(--color-text)/80"
        >
          About Us
        </p>
        <p onClick={() => navigate("/contact")} className="hover:text-(--color-text)/80">
          Contact Us
        </p>
      </div>     
    </div>
  )
}

export default NavBar
