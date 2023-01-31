import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Home from "./Pages/Home";
import PhotographyGallery from "./Pages/PhotgraphyGallery";
import GraphicGallery from "./Pages/GraphicGallery";
import NotFoundPage from "./Pages/NotFoundPage";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogEditor from "./Pages/BlogEditor";
import EditPosts from "./Pages/EditPosts";
import Login from "./Pages/Login";
import BlogPost from "./Pages/BlogPost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/blog/post/:id" element={<BlogPost />} />
          <Route path="/login/des" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/photo-gallery" element={<PhotographyGallery />} />
          <Route path="/photography" element={<PhotographyGallery />} />
          <Route path="/graphicdesign" element={<GraphicGallery />} />
          <Route path="/graphics-gallery" element={<GraphicGallery />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/aboutme" element={<About />} />

          <Route
            path="/blog-editor"
            element={
              <BlogEditor
                postTitle={""}
                Tags={""}
                Blurb={""}
                Post={""}
                ImageURL={""}
                Mode={""}
                PostID={""}
              />
            }
          />

          <Route path="/edit-posts" element={<EditPosts />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
