import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../../data";

export const userReducer = createSlice({
  name: "users",
  initialState: {
    users: [...UserData],
    user: {},
    fetching: false,
  },
  reducers: {
    addUser: (state, action) => {
      if (action.payload) {
        state.users.push(action.payload);
      }
    },
    deleteUser: (state, action) => {
      if (action.payload) {
        state.users = state.users.filter((d) => d.id !== action.payload.id);
      }
    },
    editUser: (state, action) => {
      if (action.payload) {
        state.users.splice(action.payload.id - 1, 1, action.payload);
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = userReducer.actions;

export default userReducer.reducer;
