import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./slices/taskSlice";

const store = configureStore({
  reducer: {
    taskList: taskReducer
  }
})

export default store