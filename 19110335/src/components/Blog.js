
import React, {useState} from 'react';
import {
  useParams
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../redux/blogRedux";

function Blog () {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const blogsRedux = useSelector(state => state.blogs.listBlog);
  const blog = blogsRedux.find((b) => b.id.toString() === id.toString());
  const { comments } = blog;
  const dispatch = useDispatch();
  const handleSubmitComment = (e, dispatch) => {
    e.preventDefault();
    dispatch(addComment({id , name , comment }));
    setName("");
    setComment("");
  }
  return (
    <div className="flex-col">
      <div className="flex-col text-center">
        <h1>Nội dung Blogs</h1>
        <p>Tiêu đề:  {blog.title}</p>
        <p>Mô tả: {blog.description}</p>
        <p>Nội dung:{blog.content}</p>
      </div>
      <div className="flex-col">
        <h2 className="mt-3"> Nội dung Comment</h2>
        {comments.map((c,i) =>
            <p className="text-center" key={i}>{ c.name } : { c.comment }</p>
          )};
      </div>
      <div className="mx-4">
        <h1 className="text-center font-bold">Thêm Comment tại đây</h1>
        <form id="addComment" onSubmit={e => handleSubmitComment(e, dispatch)}>
          <div className="relative z-0 mb-6 w-full group">
            <textarea type="text" name="name" id="floating_email"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-white peer"
              required value={name} onChange={(e) => setName(e.target.value)}/>
            <label htmlFor ="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Name</label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <textarea row="4" type="text" name="comment" id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 text-white peer"
              required value={comment} onChange={(e) => setComment(e.target.value)}> </textarea>
            <label htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Comment</label>
          </div>
          <button type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Blog;