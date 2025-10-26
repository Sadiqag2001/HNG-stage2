import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import bgimg from "../assets/bgImg0.jpg"
import useAuthStore from "../store/useAuthStore";

const Register = () => {
  const register = useAuthStore((state) => state.register);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);


    const [errors, setErrors] = useState({});

const validateForm = () => {
  let newErrors = {};

  if (!form.firstName.trim()) newErrors.firstName = "First name is required";
  if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
  if (!form.email.trim()) newErrors.email = "Email is required";
  if (!form.username.trim()) newErrors.username = "Username is required";
  if (!form.password.trim()) newErrors.password = "Password is required";
  if (!form.agree) newErrors.agree = "You must accept the terms";

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  const newUser = {
    firstName: form.firstName.trim(),
    lastName: form.lastName.trim(),
    email: form.email.trim(),
    username: form.username.trim(),
    password: form.password.trim(),
  };

  const result = register(newUser);

  if (!result.success) {
    setErrors({ form: result.message });
    return;
  }

  navigate("/dashboard");
};



  return (
    <div className="w-full h-auto bg-(--beige) pt-20 flex items-center justify-center">
      <div className="w-[80%] h-[80%] flex flex-col md:flex-row rounded-xl p-4 bg-(--color-text)">
        
        <div style={{ backgroundImage: `url(${bgimg})` }} className="hidden md:block w-[50%] relative bg-cover bg-center overflow-hidden rounded-xl">
                   
                      <div className="absolute inset-0 bg-black/30"></div>
                  <div className="w-[calc(100%-16px)] h-full p-4 flex flex-col justify-between absolute">
                    <div className="flex justify-between items-center gap-4">
                      <h2 className="text-xl font-bold text-white">TixFirm</h2>
                      <div
                        onClick={() => navigate("/")}
                        className="bg-amber-50/30 text-white cursor-pointer text-[10px] rounded-2xl flex items-center justify-center gap-2 py-1.5 px-2"
                      >
                        Back to Home page <FaArrowRight />
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center text-white">
                      <h1 className="text-lg">Reliability & </h1>
                      <h1 className="text-lg">Efficiency</h1>
                      <div className="flex gap-3 mt-6 pb-2">
                        <div className="w-4.5 h-[2.5px] bg-white/45 rounded-md" />
                        <div className="w-4.5 h-[2.5px] bg-white/45 rounded-md" />
                        <div className="w-5.5 h-[2.5px] bg-white rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>

        <div className="w-full md:w-[50%] py-10 px-6 md:px-10 flex flex-col justify-center text-white">
          <h3 className="text-2xl font-bold pt-5">Create an Account</h3>
          <p className="mb-6 text-[12px]">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="underline text-(--beige) cursor-pointer"
            >
              Log in
            </span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
            <div className="flex flex-col md:flex-row gap-3">
              <input
                className="w-full md:w-1/2 h-12 px-3 text-(--beige) text-sm placeholder:text-(--beige)/40 bg-(--beige)/5 rounded-sm"
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              />
              {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
            )}
              <input
                className="w-full md:w-1/2 h-12 px-3 text-(--beige) text-sm placeholder:text-(--beige)/40 bg-(--beige)/5 rounded-sm"
                placeholder="Last name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              />
              {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
            )}
            </div>
            <input
              className="w-full h-12 px-3 text-(--beige) text-sm placeholder:text-(--beige)/40 bg-(--beige)/5 rounded-sm"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
            <input
              className="w-full h-12 px-3 text-(--beige) text-sm placeholder:text-(--beige)/40 bg-(--beige)/5 rounded-sm"
              placeholder="Username"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
            />
            {errors.username && (
              <p className="text-red-400 text-xs mt-1">{errors.username}</p>
            )}
            <div className="w-full h-12 relative">
              <input
                className="w-full h-full px-3 text-(--beige) text-sm placeholder:text-(--beige)/40 bg-(--beige)/5 rounded-sm"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <IoEyeOff className="absolute right-3 top-[17px]" />
                ) : (
                  <IoEye className="absolute right-3 top-[17px]" />
                )}
              </span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={form.agree}
                onChange={(e) => setForm({ ...form, agree: e.target.checked })}
                className="bg-amber-100"
              />
              {errors.agree && (
              <p className="text-red-400 text-xs mt-1">{errors.agree}</p>
            )}
              <p className="text-sm">
                I agree to the{" "}
                <span className="underline text-(--beige) cursor-pointer">
                  Terms and Conditions
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-(--beige) text-(--color-text) mb-3 py-4 flex items-center justify-center rounded-sm cursor-pointer"
            >
              Create Account
            </button>
            {errors.form && (
              <p className="text-red-400 text-sm text-center mt-2">{errors.form}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
