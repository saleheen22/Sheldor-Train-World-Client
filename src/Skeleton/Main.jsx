import { Outlet } from "react-router-dom";
import Navbar from "../components/Common/Navbar/Navbar";
import Footer from "../components/Common/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;