import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/UserList.reducer";

export default configureStore({
  reducer: {
    usersList: userReducer,
  },
});
