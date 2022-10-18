import { configureStore } from "@reduxjs/toolkit";
import blogsReduce from "./blogRedux";

export default configureStore({
  reducer: {
    blogs: blogsReduce,
  }
})