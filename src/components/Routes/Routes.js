import AllBooks from "../AllBooks/AllBooks";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import AddAProduct from "../Dashboard/AddAProduct";
import AllBuyers from "../Dashboard/AllBuyers";
import AllSellers from "../Dashboard/AllSellers";
import DashboardHome from "../Dashboard/DashboardHome";
import DashboardLayout from "../Dashboard/DashboardLayout";
import MyOrders from "../Dashboard/MyOrders";
import MyProducts from "../Dashboard/MyProducts";
import Payment from "../Dashboard/Payment/Payment";
import ReportedItems from "../Dashboard/ReportedItems";
import Blog from "../Home/Blog/Blog";
import AdminRoute from "./AdminRoutes";
import PrivateRoute from "./PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Home/Home/Home");
const { default: Main } = require("../Main/Main");
const { default: ErrorPage } = require("../shared/ErrorPage");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/category/:category_id",
                loader: ({ params }) => fetch(`https://bookhouse-server.vercel.app/category/${params.category_id}`),
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        // errorElement: <DispayError></DispayError>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome></DashboardHome>,

            },
            {
                path: "/dashboard/allsellers",
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>,

            },
            {
                path: "/dashboard/allbuyers",
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>,

            },
            {
                path: "/dashboard/addaproduct",
                element: <PrivateRoute><AddAProduct></AddAProduct></PrivateRoute>
            },
            {
                path: "/dashboard/myproducts",
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>
            },
            {
                path: "/dashboard/myorders",
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: "/dashboard/reported",
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://bookhouse-server.vercel.app/payforbook/${params.id}`)

            },

        ]
    },

])

export default router;