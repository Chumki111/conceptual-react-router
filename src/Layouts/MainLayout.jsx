import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";



const MainLayout = () => {
    const navigation = useNavigation();
    console.log(navigation)
    return (
        <div>
            
                <Navbar></Navbar>
                <div className="min-h-screen my-10">
                <Outlet></Outlet>
                </div>
                <Footer></Footer>
                
        </div>
    );
};

export default MainLayout;