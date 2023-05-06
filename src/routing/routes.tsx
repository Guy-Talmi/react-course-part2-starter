import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const routes =
    createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                // { path: '', element: <HomePage /> },
                { index: true, element: <HomePage /> },
                { path: '/login', element: <LoginPage /> },
            ]
        },
        {
            element: <PrivateRoutes />,
            children: [
                {
                    path: 'users',
                    element: <UsersPage />,
                    children: [
                        { path: ':id', element: <UserDetail /> }
                    ]
                },
            ]
        }
    ]);

export default routes;
