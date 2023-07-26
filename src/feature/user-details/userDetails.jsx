import {useDispatch, useSelector} from "react-redux";
import {addUser, fetchUserNameList} from "./usersSlice.js";
import {useEffect, useRef} from "react";

function User() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserNameList());
    }, [dispatch])

    const userNameList = useSelector((state) => state.userInfo.userNameList);
    console.log(userNameList);

    const userName = useRef();

    function handleInput(e) {
        e.preventDefault()
        dispatch(addUser(userName.current))
    }

    return (
        <>
            <div className="text-center mt-9 flex flex-col justify-center items-center">
                <input type="text" className="mb-8 h-[500] w-1/2 border-amber-950 border-2 rounded p-3"
                       placeholder="type name..."
                       onChange={(e) => userName.current = e.target.value}/>

                <button
                    className="border-2 px-8 py-3 bg-blue-500 rounded-2xl w-1/3 "
                    onClick={handleInput}>
                    ADD USER
                </button>
            </div>
            <br/>
            <br/>
            <br/>
            {
                userNameList.map((value, key) => {
                    return (
                        <div key={key}>{value}</div>
                    )
                })
            }

        </>
    )
}

export default User