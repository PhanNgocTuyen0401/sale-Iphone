import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
            {/* body */}
        </div>
    )
}

export default Layout;