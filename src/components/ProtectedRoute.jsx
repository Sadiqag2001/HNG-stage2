import { Navigate, useLocation } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

const ProtectedRoute = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const location = useLocation();

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ message: "You need to login to access your dashboard", from: location.pathname }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
