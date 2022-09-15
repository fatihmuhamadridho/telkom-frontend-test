import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AddUserGenerate } from "@api/userGenerate";

export const addUser = createAsyncThunk('user/AddUser', async (user) => {
    return user;
})

export const addUserGenerate = createAsyncThunk('user/addUserGenerate', async () => {
    const res = await AddUserGenerate();
    return res;
})

export const deleteAllUser = createAsyncThunk('user/deleteAllUser', async () => {
    return;
});

const userSlice = createSlice({
    name: "users",
    initialState: {
        status: null,
        data: [],
    },
    reducers: {},
    extraReducers: {
        [addUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [addUser.fulfilled]: (state, action) => {
            state.status = true,
            state.data = state.data.concat(action.payload)
        },
        [addUser.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [addUserGenerate.pending]: (state, action) => {
            state.status = 'loading'
        },
        [addUserGenerate.fulfilled]: (state, action) => {
            state.status = true
            state.data = state.data.concat(action.payload.results.map((data) => {
                return {
                    fullName: data.name.first + " " + data.name.last,
                    email: data.email,
                    birth: data.dob.date,
                    address: data.location.city + ", " + data.location.country,
                    phone: data.phone,
                    password: data.login.password,
                    picture: data.picture.large
                }
            }))
        },
        [addUserGenerate.rejected]: (state, action) => {
            state.status = 'failed'
        },
        [deleteAllUser.pending]: (state, action) => {
            state.status = 'loading'
        },
        [deleteAllUser.fulfilled]: (state, action) => {
            state.status = true
            state.data = []
        },
        [deleteAllUser.rejected]: (state, action) => {
            state.status = 'failed'
        }
    }
})

export default userSlice.reducer