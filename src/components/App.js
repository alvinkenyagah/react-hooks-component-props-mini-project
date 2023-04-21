import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  function Header(props) {
    return (
      <header>
        <h1>{props.blogName}</h1>
      </header>
    );
  }

  function About(props) {
    const imgSrc = props.imageSrc || "https://via.placeholder.com/215";
    const altText = props.altText || "blog logo";

    return (
      <aside>
        <img src={imgSrc} alt={altText} />
        <p>{props.aboutText}</p>
      </aside>
    );
  }

  const Post = ({ title, preview, minutes }) => {
    return (
      <div className="post">
        <h2>
          {" "}
          <a
            href="http://www.google.com"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {title}
          </a>
        </h2>
        <p>{preview}</p>
        <p>{minutes} min read</p>
      </div>
    );
  };

  const Posted = blogData.posts.map((post) => {
    return (
      <Post
        key={post.id}
        title={post.title}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });

  return (
    <div className="App">
      <Header blogName={blogData.name} />
      <About
        aboutText={blogData.about}
        imageSrc={blogData.image}
        altText="blog logo"
      />
      {Posted}
    </div>
  );
}

export default App;
