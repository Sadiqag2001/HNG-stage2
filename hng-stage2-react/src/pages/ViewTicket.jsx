import { useNavigate, useParams } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const ViewTicket = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tickets = useAuthStore((state) => state.tickets);
  const updateTicket = useAuthStore((state) => state.updateTicket);

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [errors, setErrors] = useState({});

  const ticket = tickets.find((t) => t.id === Number(id));

  useEffect(() => {
    if (!ticket) return;
    setForm({
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
    });
  }, [ticket]);

  if (!ticket) {
    return (
      <p className="text-center text-white mt-10">
        Ticket not found ⚠️
      </p>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required.";
    if (!["open", "in_progress", "closed"].includes(form.status))
      newErrors.status = "Invalid status value.";

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    updateTicket(ticket.id, form);
    toast.success("Ticket updated successfully!");
    navigate("/ticket");
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto text-(--beige) bg-(--color-text) p-6 rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-6">Edit Ticket</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="text-sm">Title</label>
          <input
            type="text"
            className="w-full p-2 bg-(--beige)/10 text-(--beige) rounded"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          {errors.title && (
            <p className="text-red-400 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="text-sm">Description</label>
          <textarea
            className="w-full p-2 bg-(--beige)/10 text-(--beige) rounded"
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
        </div>

        <div>
          <label className="text-sm mb-1">Status</label>
          <select
            className="w-full p-2 bg-(--beige)/10 text-(--beige) rounded cursor-pointer"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          {errors.status && (
            <p className="text-red-400 text-xs mt-1">{errors.status}</p>
          )}
        </div>

        <div className="flex gap-4 mt-4">
          <button
            type="submit"
            className="bg-green-500/50 px-4 py-2 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
          <button
            type="button"
            className="bg-(--beige) text-(--color-text) px-4 py-2 rounded hover:bg-(--beige)"
            onClick={() => navigate("/ticket")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ViewTicket;
