import { NavLink, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="flex gap-6 mx-10">
            <div className="w-[20%] bg-white-200 shadow-lg px-4 py-4 rounded-lg font-bold">
             <ul className=" space-y-3">
                <li>
                <NavLink to='/dashboard'>Dashboard</NavLink>
                </li>
                <li>
                <NavLink to='/dashboard/profile'>Profile</NavLink>
                </li>
                <li>
                <NavLink to='/dashboard/editProfile'>EditProfile</NavLink>
                </li>
             </ul>
            </div>
            <div className="w-[80%]">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;