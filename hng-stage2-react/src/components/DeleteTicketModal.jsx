import React from "react";

const DeleteTicketModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 text-black w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Confirm Ticket Deletion
        </h2>
        <p className="text-sm mb-6">
          Are you sure you want to delete this ticket? This action cannot be undone.
        </p>

        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            onClick={onConfirm}
          >
            Delete Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTicketModal;
