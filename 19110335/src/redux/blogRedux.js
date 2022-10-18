import { createSlice } from "@reduxjs/toolkit";

const blogsSlice = createSlice({
    name: "Blogs",
    initialState: {
        listBlog: [{ id: 2, title: "title", content: "abc", description: 'description', comments:[{name:'test', comment:'test'}] }],
        currentBlogId: null,
        currentBlog: null,
    },
    reducers: {
        addBlog: (state, action) => {
            const oldBlog = state.listBlog;
            const newBlog = {...action.payload, comments: []};
            state.listBlog = [...oldBlog, newBlog];
            // console.log(state.listBlog);
        },
        addComment: (state, action) => {
            const {id, name, comment} = action.payload;
            const blog = state.listBlog.find((b) => b.id.toString() === id.toString());
            blog.comments.push({name,comment});
            state.listBlog = state.listBlog.map((b) => (b.id.toString() === id.toString() ? blog : b));
        },
        removeBlog: (state, action) => {
            const id = action.payload;
            state.listBlog = state.listBlog.filter((b) => (b.id.toString() !== id.toString()));
        },
        updateBlog: (state, action) => {
            const { id } = action.payload;
            state.listBlog = state.listBlog.map((b) => (b.id.toString() === id.toString() ? action.payload : b));
            console.log(state);
        },
    }
});


export const { addBlog, removeBlog, updateBlog, addComment } = blogsSlice.actions;

export default blogsSlice.reducer;