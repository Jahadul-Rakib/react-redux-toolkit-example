import User from "./feature/user-details/userDetails.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

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
