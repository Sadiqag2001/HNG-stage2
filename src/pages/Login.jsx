import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import bgimg from "../assets/bgImg0.jpg"
import { useLocation } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const location = useLocation();
  const message = location.state?.message;

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!form.identifier.trim()) newErrors.identifier = "Enter email or username";
    if (!form.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    const result = login(form.identifier, form.password);

    if (!result.success) {
      setErrors({ form: result.message });
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="w-full h-screen bg-(--beige) pt-30 flex items-center justify-center">
      {message && (
        <p className="text-red-400 mb-3 text-center">{message}</p>
      )}
      <div className="w-[80%] h-[95%] flex flex-col md:flex-row rounded-xl p-4 bg-(--color-text)">
        
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

        <div className="w-full md:w-[50%] py-10 px-6 md:px-10 flex flex-col justify-center text-(--beige) bg-(--color-text) rounded">
          <h3 className="text-2xl text-white font-bold md:pt-1">Welcome back</h3>
          <p className="mb-6 text-[15px] text-white">
            Don&apos;t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="underline text-(--beige) cursor-pointer"
            >
              Register
            </span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
            <input
              className="w-full h-12 px-3 text-(--beige) text-sm placeholder:text-(--beige)/40 bg-(--beige)/5 rounded-sm"
              placeholder="Email or Username"
              value={form.identifier}
              onChange={(e) => setForm({ ...form, identifier: e.target.value })}
            />
            {errors.identifier && (
              <p className="text-red-400 text-xs mt-1">{errors.identifier}</p>
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

            {errors.form && (
              <p className="text-red-400 text-sm text-center">{errors.form}</p>
            )}

            <button
              type="submit"
              className="w-full bg-(--beige) text-(--color-text) mb-3 py-4 flex items-center justify-center rounded-sm cursor-pointer"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
