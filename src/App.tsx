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
import Solutions from "./Pages/Solutions";
import Contact from "./Pages/Contact";
import { Helmet } from "react-helmet";
import Projects from "./Pages/Projects";
import AppStoreRedirecter from "./Pages/AppStoreRedirecter";

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>quinn patwardhan</title>
        <meta
          name="description"
          content="see a curated collection of quinn's work, including his photography, graphic design and web development. quinn patwardhan is a creative and software developer based in washington, dc"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route
            path="/determine-appstore/ios/:IOS_LINK/android/:ANDROID_LINK"
            element={<AppStoreRedirecter />}
          />
          <Route path="/blog/post/:id" element={<BlogPost />} />
          <Route path="/login/:des" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/" element={<Home />} />
          <Route path="/photo-gallery" element={<PhotographyGallery />} />
          <Route path="/photography" element={<PhotographyGallery />} />
          <Route path="/graphicdesign" element={<GraphicGallery />} />
          <Route path="/graphics-gallery" element={<GraphicGallery />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
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
    </>
  );
}

export default App;
