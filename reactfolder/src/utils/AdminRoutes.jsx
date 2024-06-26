import { isAuth } from "./isAuth";
import { Route, Navigate, Outlet } from "react-router-dom";

const AdminRoutes = () => {
  return isAuth() ? (
    <Outlet />
  ) : (
    <>
      <Navigate to="/login" />
    </>
  );
};
export default AdminRoutes;

export const PublicRoutes = () => {
  return isAuth() ? (
    <>
      {" "}
      <Navigate to="/dashboard" />{" "}
    </>
  ) : (
    <Outlet />
  );
};
