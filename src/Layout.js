import { Outlet,Link } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";

const Layout = () => {
    return (
        <>
            <div className="App">
                <div className="content">
                    <Home />
                    
                </div>

                <Outlet />
            </div>
        </>
    )
};

export default Layout;


