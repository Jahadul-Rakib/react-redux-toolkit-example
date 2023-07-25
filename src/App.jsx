import {BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./feature/user-details/userDetails.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<User/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
