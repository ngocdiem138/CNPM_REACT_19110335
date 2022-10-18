/* eslint-disable no-mixed-operators */

import React, { useState } from 'react';
import RedirectBlog from './RedirectBlog';
import Header from './Header'
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from '../redux/blogRedux'

function Home() {
  let [blogs] = useState([{ id: 1, title: 'Home' }, { id: 1, title: 'Second' }])
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  const blogsRedux = useSelector(state => state.blogs.listBlog);
  if (blogsRedux) {
    blogs = blogsRedux;
  }
  const dispatch = useDispatch();
  const handleSubmit = (e, dispatch) => {
    e.preventDefault();
    const id = generateUUID();
    dispatch(addBlog({ id, title, description, content }));
    setTitle("");
    setDescription("");
    setContent("");
  }
  return (
    <>
      <div className=" container">
        <h1 className="text-center font-bold">Danh sách các blog</h1>
        <div className="text-center">
          {blogs.map((blog) =>
            <RedirectBlog key={blog.id} blog={blog} />
          )};
        </div>
        <br />
        <div className="mx-4">
          <h1 className="text-center font-bold">Thêm blog tại đây</h1>
          <form id="myForm" onSubmit={e => handleSubmit(e, dispatch)}>
            <div className="relative z-0 mb-6 w-full group" >
              <textarea type="text" name="title" id="floating_email"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required value={title} onChange={(e) => setTitle(e.target.value)} />
              <label htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title
                Blog</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea type="text" name="description" id="floating_password"
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required value={description} onChange={(e) => setDescription(e.target.value)} />
              <label htmlFor="floating_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <textarea row="4" type="text" name="content" id="floating_repeat_password" value={content} onChange={(e) => setContent(e.target.value)}
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required></textarea>
              <label htmlFor="floating_repeat_password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
            </div>
            <button type='submit'
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}


function generateUUID() { // Public Domain/MIT
  let d = new Date().getTime();// Timestamp
  let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;// Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;// random number between 0 and 16
    if (d > 0) { // Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else { // Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export default Home;