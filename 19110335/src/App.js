import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
import UpdateBlog from "./components/UpdateBlog";
import PageNotFound from "./components/PageNotFound";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/contacts" exact element={<Contact />} />
          <Route path='/blog/:id' exact element={<Blog />} />
          <Route path='update/blog/:id' exact element={<UpdateBlog />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/contacts" element={<Contact />}
          />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}