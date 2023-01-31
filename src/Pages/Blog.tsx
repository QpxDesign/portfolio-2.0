import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { FormatTime } from "../Helpers/FormatTime";

interface PostInterface {
  post: PostItemInterface;
}
interface PostItemInterface {
  PostID: String;
  AuthorName: String;
  PostTitle: String;
  PostBlurb: String;
  PostTags: String;
  PostSlug: String;
  PostThumbnailLink: string;
  PostHTML: String;
  timestamp: Number;
}

export default function Blog() {
  const [res, setRes]: Array<any> = useState([]);
  const [loaded, setLoaded]: any = useState(false);
  async function FetchPosts() {
    await fetch("https://api.quinnpatwardhan.com/get-blog-posts")
      .then((res) => res.json())
      .then((r) => {
        var byDate = r.slice(0);
        byDate.sort(function (a: any, b: any) {
          return b.timestamp - a.timestamp;
        });
        setRes(byDate);
        setLoaded(true);
      });
  }
  useEffect(() => {
    FetchPosts();
  }, []);

  return (
    <div className="page-wrapper">
      <Header />
      <h1
        className="center"
        style={{
          marginTop: ".5em",
          fontFamily: "Source Serif Pro",
          fontSize: "2.5em",
        }}
      >
        Blog
      </h1>
      <div className="posts-wrapper">
        {loaded
          ? res !== undefined
            ? res.sort().map((post: any) => {
                return (
                  <Link to={"/blog/post/" + post.PostID}>
                    <div className={"post"}>
                      <img src={post.PostThumbnailLink} />
                      <h1>{post.PostTitle}</h1>
                      <p>{post.PostBlurb}</p>
                      <div className="tags-wrapper">
                        {post.PostTags.split(",").map((tag: any) => {
                          return <div className="tag">{tag}</div>;
                        })}
                      </div>
                      <h2>By {post.AuthorName}</h2>
                      <h5>{FormatTime(post.timestamp)}</h5>
                    </div>
                  </Link>
                );
              })
            : null
          : "Loading..."}
        {res !== undefined && res.length == 0 && loaded == true ? (
          <h2>No Posts Found</h2>
        ) : null}
      </div>
    </div>
  );
}
