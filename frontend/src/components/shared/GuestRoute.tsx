import { PropsWithChildren } from "react";
import { Navigate, useSearchParams, Outlet } from "react-router-dom";

export const GuestRoute = ({ children }: PropsWithChildren) => {
    const token = localStorage.getItem("access_token");
    const [searchParams] = useSearchParams();
    const back = searchParams.get("back");

    if (token) {
        // Если залогинен — уходим с /login
        return <Navigate to={back ? decodeURIComponent(back) : "/"} replace />;
    }

    // Если не залогинен — рендерим то, что в children (или Outlet)
    return children ? <>{children}</> : <Outlet />;
};