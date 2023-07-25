import {useDispatch, useSelector} from "react-redux";
import {addUser, fetchUserNameList} from "./usersSlice.js";
import {useEffect} from "react";

function User() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserNameList());
    }, [dispatch])

    const userNameList = useSelector((state) => state.userInfo.userNameList);
    console.log(userNameList);

    return (
        <>
            <div className="text-center">
                <button className="border-amber-500 rounded" onClick={() => dispatch(addUser("dilruba"))}>
                    click here
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