import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminRoutes, { PublicRoutes } from "./utils/AdminRoutes";
import { Login } from "./pages/auth/Login";
import MainLayout from "../src/layouts/MainLayout";
import DashboardProvider from "./context/dashboardContext";
import Dashboard from "./pages/dashboard/Dashboard";
import { Register } from "./pages/auth/Register";
import Profile from "./pages/profile/profile";
import StockExchange from "./pages/stockxchange/stockExchange";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route element={<PublicRoutes />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>

                    <Route element={<AdminRoutes />}>
                        <Route path="/dashboard" element={<MainLayout />}>
                            <Route
                                index
                                element={
                                    <DashboardProvider>
                                        <Dashboard />
                                    </DashboardProvider>
                                }
                            />
                            <Route path="profile" element={<Profile/>} />
                            <Route path="stockexchange" element={<StockExchange/>} />
                        </Route>
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
