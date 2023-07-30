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

    return (<>
        <div className="container ">
            <div className="flex flex-col justify-center items-center text-center m-auto">
                <input type="text"
                       className="mb-8 h-[50px] w-1/2 border-amber-950 border-2 rounded p-3"
                       placeholder="type name..."
                       onChange={(e) => userName.current = e.target.value}/>

                <button
                    className="border-2 px-8 py-3 bg-blue-500 rounded-2xl w-1/3"
                    onClick={handleInput}>
                    ADD USER
                </button>
            </div>
            <div className="m-auto mt-[250px]">
                <ul>
                    {userNameList.map((value, key) => {
                        return (
                            <li className="border-amber-950 p-5 m-3 border-2 rounded text-center" key={key}>
                                <div>{value}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </>)
}

export default User