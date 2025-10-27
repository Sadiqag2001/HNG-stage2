// src/store/useAuthStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      users: [],
      user: null,
      tickets: [],

      // --- Auth actions ---
      register: (newUser) => {
        const { users } = get();

        const exists = users.some(
          (u) => u.email === newUser.email || u.username === newUser.username
        );

        if (exists) {
          return { success: false, message: "Email or Username already exists" };
        }

        set({
          users: [...users, newUser],
          user: newUser,
        });

        return { success: true };
      },

      login: (identifier, password) => {
        const { users } = get();

        const found = users.find(
          (u) =>
            (u.email === identifier || u.username === identifier) &&
            u.password === password
        );

        if (!found) {
          return { success: false, message: "Invalid login credentials" };
        }

        set({ user: found });
        return { success: true };
      },

      logout: () => set({ user: null }),

      // --- Ticket actions ---
      addTicket: (ticket) => {
        const newTicket = {
          ...ticket,
          id: Date.now(),
          createdAt: new Date().toISOString(),
          createdBy: get().user?.username || "Unknown",
        };

        set({ tickets: [...get().tickets, newTicket] });
      },

      updateTicket: (id, updatedFields) => {
        const { tickets } = get();
        const updatedTickets = tickets.map((t) =>
            t.id === id ? { ...t, ...updatedFields } : t
        );
        set({ tickets: updatedTickets });
        return { success: true };
        },

      deleteTicket: (id) => {
        const updated = get().tickets.filter((t) => t.id !== id);
        set({ tickets: updated });
      },

      // optional: updateTicket helper if you later want edit functionality
      updateTicket: (id, patch) => {
        const updated = get().tickets.map((t) =>
          t.id === id ? { ...t, ...patch } : t
        );
        set({ tickets: updated });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        users: state.users,
        user: state.user,
        tickets: state.tickets,
      }),
    }
  )
);

export default useAuthStore;
