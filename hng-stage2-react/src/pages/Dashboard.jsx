import { IoPieChart } from "react-icons/io5";
import useAuthStore from "../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate("/");
  }

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-3 justify-center py-10 h-screen items-center p-4 bg-(--color-text) text-(--beige)">
        <section className="w-full max-w-[1440px] flex flex-col gap-3 justify-center items-center ">
            <h2 className="text-5xl font-bold">Ticket Dashboard</h2>
            <h1 className="text-3xl font-bold ">Welcome, {user?.username}</h1>
            <button  onClick={handleLogout} 
            className="px-4 py-2 bg-(--beige) mb-6 text-(--color-text) hover:text-(--color-text)/80 hover:bg-(--beige)/80 rounded-md">
            Logout</button>
        </section>
        <section className="flex flex-row gap-4 px-5 w-full">
            <div className="flex flex-col gap-5 shadow-2xl cursor-pointer rounded-lg bg-(--beige) text-(--color-text) p-3 w-full">
                <div className="flex flex-row justify-between">
                    <h1 className="font-semibold text-2xl">Total Tickets</h1>
                    <div className="text-green/80"><IoPieChart size={24}/></div>
                </div>
                <h1 className="text-center font-bold text-4xl">
                    200
                </h1>
            </div>

            <div className="flex flex-col gap-5 shadow-2xl cursor-pointer rounded-lg bg-(--beige) text-(--color-text) p-3 w-full">
                <div className="flex flex-row justify-between">
                    <h1 className="font-semibold text-2xl">Open Tickets</h1>
                    <div className="text-green/80"><IoPieChart size={24}/></div>
                </div>
                <h1 className="text-center font-bold text-4xl">
                    100
                </h1>
            </div>

            <div className="flex flex-col gap-5 shadow-2xl cursor-pointer rounded-lg bg-(--beige) text-(--color-text) p-3 w-full">
                <div className="flex flex-row justify-between">
                    <h1 className="font-semibold text-2xl">Resolved Tickets</h1>
                    <div className="text-green/80"><IoPieChart size={24}/></div>
                </div>
                <h1 className="text-center font-bold text-4xl">
                    100
                </h1>
            </div>
        </section>
    </div>

  );
};
export default Dashboard 