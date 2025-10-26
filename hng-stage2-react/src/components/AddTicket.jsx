import React, { useState } from 'react';
import useAuthStore from '../store/useAuthStore';
import { useNavigate } from 'react-router-dom';

const AddTicket = () => {const addTicket = useAuthStore((state) => state.addTicket);

    const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    status: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const allowedStatuses = ["open", "in_progress", "closed"];

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.status.trim()) {
      newErrors.status = "Status is required";
    } else if (!allowedStatuses.includes(form.status)) {
      newErrors.status = "Invalid status selected";
    }

    if (form.description.length > 200)
      newErrors.description = "Description must not exceed 200 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    addTicket(form);

    toast.success("Ticket created successfully!");

    setForm({ title: "", status: "", description: "" });
    navigate("/ticket")
  };

  return (
    <div className="w-full max-w-[600px] mx-auto text-(--color-text) p-6 rounded-lg my-5 bg-(--beige)">
      <h2 className="text-2xl font-bold mb-6">Add New Ticket</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        <div>
          <label className="block text-sm mb-1">Title *</label>
          <input
            className="w-full px-3 py-2 rounded bg-(--color-text)/10 text-(--color-text)"
            value={form.title}
            placeholder="Enter ticket title"
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          {errors.title && (
            <p className="text-red-400 text-xs mt-1">{errors.title}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Status *</label>
          <select
            className="w-full px-3 py-2 rounded bg-(--color-text)/10 text-(--color-text)"
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option value="">Select Status</option>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
          {errors.status && (
            <p className="text-red-400 text-xs mt-1">{errors.status}</p>
          )}
        </div>

        <div>
          <label className="block text-sm mb-1">Description (optional)</label>
          <textarea
            className="w-full px-3 py-2 h-20 rounded bg-(--color-text)/10 text-(--color-text)"
            placeholder="Describe the issue..."
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />
          {errors.description && (
            <p className="text-red-400 text-xs mt-1">{errors.description}</p>
          )}
        </div>

        <div className='flex flex-row gap-3'>
            <button
            type="submit"
            className="w-full py-3 mt-3 rounded bg-(--color-text) text-(--beige) font-semibold hover:bg-(--color-text)/90"
            >
            Add Ticket
            </button>
            <button
            onClick={()=> navigate("/ticket")}
            className="w-full py-3 mt-3 rounded border border-(--color-text) text-(--color-text) hover:text-(--color-text)/90 font-semibold hover:border-(--color-text)/90"
            >
            Cancel
            </button>
        </div>
      </form>
      
    </div>
  )
}

export default AddTicket
