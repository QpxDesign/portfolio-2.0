import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { FormatTime } from "../Helpers/FormatTime";
import { Helmet } from "react-helmet";
import { BlogPostData } from "../structs/BlogPostData";

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
  const [res, setRes] = useState<Array<BlogPostData> | undefined>(undefined);
  const [loaded, setLoaded] = useState(false);
  async function FetchPosts() {
    await fetch("https://api.quinnpatwardhan.com/get-blog-posts")
      .then((res) => res.json())
      .then((r) => {
        var byDate = r.slice(0);
        byDate.sort(function (a: BlogPostData, b: BlogPostData) {
          return parseInt(b.timestamp) - parseInt(a.timestamp);
        });
        setRes(byDate);
        setLoaded(true);
      });
  }
  useEffect(() => {
    FetchPosts();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>blog</title>
        <meta
          name="description"
          content="see a curated collection of quinn's work, including his photography, graphic design and web development. quinn patwardhan is a creative and software developer based in washington, dc"
        />
      </Helmet>
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
              ? res
                  .sort()
                  .filter((a) => a.destination === "quinnpatwardhan.com")
                  .map((post: BlogPostData) => {
                    return (
                      <Link
                        to={
                          "/blog/post/" +
                          post.PostTitle.replaceAll(" ", "-").replace(
                            /[^a-zA-Z0-9-_]/g,
                            ""
                          )
                        }
                      >
                        <div className={"post"}>
                          <img src={post.PostThumbnailLink} />
                          <h1>{post.PostTitle}</h1>
                          <p>{post.PostBlurb}</p>
                          <div className="tags-wrapper">
                            {post.PostTags.split(",").map((tag: string) => {
                              return <div className="tag">{tag}</div>;
                            })}
                          </div>
                          <h2>By {post.AuthorName}</h2>
                          <h5>
                            {FormatTime(post.timestamp)} -{" "}
                            {post.views.toString()} views
                          </h5>
                        </div>
                      </Link>
                    );
                  })
              : null
            : "Loading..."}
        </div>
      </div>
    </>
  );
}
