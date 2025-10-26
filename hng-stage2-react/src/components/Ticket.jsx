import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../store/useAuthStore';
import toast from "react-hot-toast";
import DeleteTicketModal from "../components/DeleteTicketModal";

const Ticket = () => {
  const navigate = useNavigate();
  const tickets = useAuthStore((state) => state.tickets);
  const deleteTicket = useAuthStore((state) => state.deleteTicket);


  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "bg-green-600/80 text-white";
      case "in_progress":
        return "bg-amber-500/80 text-black";
      case "closed":
        return "bg-gray-500/80 text-white";
      default:
        return "bg-gray-400/80 text-black";
    }
  };

   const [deleteId, setDeleteId] = useState(null);

  const handleDeleteConfirm = () => {
    deleteTicket(deleteId);
    setDeleteId(null);
    toast.success("Ticket deleted successfully 🚮");
  };

  return (
    <div className="w-full max-w-[1440px] flex flex-col gap-4 justify-center py-10 items-center p-4 mx-auto">
      <div className="flex justify-between w-full">
        <p className="text-3xl font-semibold">Tickets list</p>
        <button
          onClick={() => navigate("/add-ticket")}
          className="px-4 py-2 border border-(--beige) cursor-pointer rounded-lg hover:opacity-80 transition"
        >
          + New Ticket
        </button>
      </div>

      {tickets.length === 0 ? (
        <p className="text-gray-400 mt-4">No tickets available</p>
      ) : (
        <div className="w-full flex flex-col gap-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="px-4 py-3 flex flex-row justify-between rounded-lg bg-(--beige) text-(--color-text) shadow-md transition"
            >
                <div>
                    <h3 className="font-bold text-xl">{ticket.title}</h3>

                    <span
                        className={`inline-block mt-1 text-xs font-semibold px-3 py-1 rounded-xl ${getStatusColor(
                        ticket.status
                        )}`}
                    >
                        {ticket.status.replace("_", " ").toUpperCase()}
                    </span>

                    {ticket.description && (
                        <p className="text-sm mt-2 opacity-80">{ticket.description}</p>
                    )}

                </div>

              <div className="flex justify-center items-center h-full gap-3">
                <button
                  onClick={() => navigate(`/ticket/${ticket.id}`)}
                  className="px-3 py-1 border rounded border-(--color-text) cursor-pointer text-(--color-text) hover:border-(--color-text) transition"
                >
                Edit
                </button>
                <button
                  onClick={() => setDeleteId(ticket.id)}
                  className="px-3 py-1 border rounded border-red-600 cursor-pointer text-red-600 hover:border-red-700 hover:text-red-700 transition"
                >
                  Delete
                </button>
              </div>
              
            </div>
          ))}
        </div>
      )}
      <DeleteTicketModal
        isOpen={deleteId !== null}
        onClose={() => setDeleteId(null)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default Ticket;
