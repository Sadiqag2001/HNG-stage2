import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      users: [],
      user: null,

      register: (newUser) => {
        const { users } = get();

        const userExists = users.some(
          (u) => u.email === newUser.email || u.username === newUser.username
        );

        if (userExists) {
          return { success: false, message: "Email or username already exists" };
        }

        const updatedUsers = [...users, newUser];
        set({
          users: updatedUsers,
          user: newUser,
        });

        return { success: true };
      },

      login: (identifier, password) => {
        const { users } = get();

        const existingUser = users.find(
          (u) =>
            (u.email === identifier || u.username === identifier) &&
            u.password === password
        );

        if (!existingUser) {
          return { success: false, message: "Invalid login credentials" };
        }

        set({ user: existingUser });
        return { success: true };
      },

      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
