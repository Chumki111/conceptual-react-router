import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <section className="flex justify-between px-14 shadow-md py-7">
            <div>
                <h1 className="text-xl font-bold">
                    Amajhon
                </h1>
            </div>
            <nav>
                    <ul className="flex gap-5">
                        <li>
                            <NavLink to='/'>Home</NavLink>
                            
                        </li>
                        <li>
                        <NavLink to='/products'>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                            
                        </li>
                    </ul>
                    
                </nav>
        </section>
    );
};

export default Navbar;