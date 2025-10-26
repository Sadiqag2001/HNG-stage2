import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const NavBar = () => {
    const navigate = useNavigate();
    const user = useAuthStore((state) => state.user);
    const logout = useAuthStore((state) => state.logout);

    const handleLogout = () => {
        logout(); 
        navigate("/login");
    };


  return (
    <div className="z-30 top-0 left-0 w-full flex items-center bg-(--beige) justify-between p-5">
        <div className='flex flex-col cursor-pointer'>
            <h2 className='text-3xl z-10'>TixFirm</h2>
        </div>
        <div className="hidden lg:flex gap-6 cursor-pointer items-center text-(--color-text)">
        <p onClick={() => navigate("/")} className="hover:text-(--color-text)/80">
          Home
        </p>
        <p onClick={() => navigate("/dashboard")} className="hover:text-(--color-text)/80">
          Dashboard
        </p>
        <p
          onClick={() => navigate("/ticket")}
          className="hover:text-(--color-text)/80"
        >
          Tickets
        </p>
        <p onClick={() => navigate("/contact")} className="hover:text-(--color-text)/80">
          Contact Us
        </p>
        {!user ? (
          <p
            onClick={() => navigate("/login")}
            className="hover:text-(--color-text)/80"
          >
            Login
          </p>
        ) : (
          <p
            onClick={handleLogout}
            className="hover:text-(--color-text)/80"
          >
            Logout
          </p>
        )}
      </div>     
    </div>
  )
}

export default NavBar
