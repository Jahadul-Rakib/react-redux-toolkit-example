import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserNameList = createAsyncThunk("users/getUserNameList",
    async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/api/v1/user",
                {
                    headers: {"content-type": "application/json"}
                }
            );
            return response.data.users
        } catch (e) {
            throw new Error(e.message)
        }
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState: {
        loading: false,
        error: null,
        userNameList: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.userNameList.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserNameList.fulfilled, (state, action) => {
            state.userNameList = []
            action.payload.forEach(data => state.userNameList.push(data))
            return state
        })
    }
});
export const {addUser} = usersSlice.actions
export default usersSlice.reducer;