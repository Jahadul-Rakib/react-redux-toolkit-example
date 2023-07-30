import User from "./feature/user-details/userDetails.jsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {TailwindPosition} from "./feature/tailwind-practice/TailwindPosition.jsx";


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
            {path: "position", element: <TailwindPosition/>},
        ],
    }
]);

function App() {
    return (
        <RouterProvider router={router}/>
    )
}

export default App
