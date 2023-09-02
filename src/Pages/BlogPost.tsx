import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Comments from "../Components/Comments";
import { FormatTime } from "../Helpers/FormatTime";
import { Helmet } from "react-helmet";

export default function BlogPost() {
  const { id } = useParams();

  const [res, setRes]: Array<any> = useState([]);
  const [loaded, setLoaded]: any = useState(false);
  const [postData, setPostData]: any = useState({});
  async function FetchPosts() {
    await fetch("https://api.quinnpatwardhan.com/get-blog-posts")
      .then((res) => res.json())
      .then((r) => {
        setRes(r);
        if (id !== undefined) {
          const newID = id.replaceAll("/blog/path/", "");
          const post = r.find((r: any) => r.PostID === newID);
          if (post == null) {
            window.location.pathname = "/404";
            return null;
          }
          setPostData(post);
        }
        setLoaded(true);
      });
  }
  function getPostFromId(postID: any) {
    return res.find((r: any) => r.PostID === postID);
  }

  useEffect(() => {
    FetchPosts();
  }, []);

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{postData.PostTitle}</title>
        <meta name="description" content={postData.PostBlurb} />
      </Helmet>
      <Header />
      {postData !== undefined ? (
        <div className="post-page-wrapper">
          <h1>{postData.PostTitle}</h1>
          <h2>
            By {postData.AuthorName} &#x2022; {FormatTime(postData.timestamp)}
          </h2>
          <img src={postData.PostThumbnailLink} />
          <p
            dangerouslySetInnerHTML={{
              __html: postData.PostHTML,
            }}
            className="content-wrapper"
          ></p>
        </div>
      ) : (
        "Error"
      )}
      <Comments />
      <Footer />
    </div>
  );
}
