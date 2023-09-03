import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Comments from "../Components/Comments";
import { FormatTime } from "../Helpers/FormatTime";
import { Helmet } from "react-helmet";
import { BlogPostData } from "../structs/BlogPostData";

export default function BlogPost() {
  const { id } = useParams();

  const [res, setRes] = useState<[BlogPostData] | undefined>(undefined);
  const [loaded, setLoaded] = useState<Boolean>(false);
  const [postData, setPostData] = useState<BlogPostData | undefined>(undefined);
  async function FetchPosts() {
    await fetch("https://api.quinnpatwardhan.com/get-blog-posts")
      .then((res) => res.json())
      .then((r) => {
        setRes(r);
        if (id !== undefined) {
          const newID = id.replaceAll("/blog/path/", "");
          const post = r.find(
            (r: BlogPostData) =>
              r.PostTitle.replaceAll(" ", "-").replace(
                /[^a-zA-Z0-9-_]/g,
                ""
              ) === newID
          );

          if (post == null) {
            const newPost = r.find(
              (r: BlogPostData) => r.PostID === id.replaceAll("/blog/path/", "")
            );
            if (newPost == null) {
              window.location.pathname = "/404";
              return null;
            } else {
              setPostData(newPost);
            }
          } else {
            setPostData(post);
          }
        }
        setLoaded(true);
      });
  }

  useEffect(() => {
    FetchPosts();
  }, []);

  return (
    <div className="">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{postData?.PostTitle}</title>
        <meta name="description" content={postData?.PostBlurb} />
        <time
          dateTime={new Date(
            postData !== null &&
            postData !== undefined &&
            postData.timestamp !== undefined &&
            postData.timestamp !== null
              ? new Date(parseInt(postData.timestamp))
              : Date.now()
          ).toISOString()}
        >
          {" "}
          {FormatTime(String(postData?.timestamp))}
        </time>
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
