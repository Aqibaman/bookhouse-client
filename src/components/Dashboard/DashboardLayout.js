import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';
import Footer from '../shared/Footer';
import Navbar from '../shared/Navbar';
import useAdmin from './Hoooks/useAdmin';
import useSeller from './Hoooks/useSeller';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    // console.log(admin)

    const [isAdmin] = useAdmin(user?.email)
    console.log(isAdmin)
    const [isSeller] = useSeller(user?.email)
    console.log(isSeller)
    return (

        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dash-borad-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  ">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dash-borad-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {
                            isAdmin &&
                            <>
                                <li><Link className='text-xl font-bold text-purple-600' to="/dashboard/allsellers">All Sellers</Link></li>
                                <li><Link className='text-xl font-bold text-purple-600' to="/dashboard/allbuyers">All Buyers</Link></li>
                                <li><Link className='text-xl font-bold text-purple-600' to="/dashboard/reported">Reported Products</Link></li>
                            </>
                        }
                        {
                            isSeller &&
                            <>
                                <li><Link className='text-xl font-bold text-purple-600' to="/dashboard/addaproduct">Add a Book</Link></li>
                                <li><Link className='text-xl font-bold text-purple-600' to="/dashboard/myproducts">My Products</Link></li>
                            </>
                        }
                        {
                            !isSeller && !isAdmin &&
                            <>
                                <li><Link className='text-xl font-bold text-purple-600' to="/dashboard/myorders">My Orders</Link></li>
                            </>
                        }

                    </ul>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default DashboardLayout;