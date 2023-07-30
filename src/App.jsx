import User from "./feature/user-details/userDetails.jsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";


function LayoutOne() {
    return (
        <Outlet/>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutOne/>,
        children: [
            {path: "", element: <User/>},
        ],
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
