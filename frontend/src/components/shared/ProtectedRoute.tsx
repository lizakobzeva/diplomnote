import { PropsWithChildren, useEffect } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      const back = encodeURIComponent(location.pathname + location.search);
      navigate(`/login?back=${back}`, { replace: true });
    }
  }, [token, navigate, location]);

  if (!token) {
    return null; // редирект уже пошёл
  }

  // Важно: рендерим Outlet, а не children напрямую!
  return <Outlet />;
};