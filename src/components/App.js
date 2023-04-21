import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {

  const Header = React.createElement("h1", { className:"aside" }, "Overreacted"); 
  const Name = React.createElement("p", { className:"aside" }, `Personal blog by ${blogData.name}`);
  const About = React.createElement("p", {id:"about"}, blogData.about)
  const Logo2 = ()=>{return(<img src={blogData.image} alt="logo" className="aside" width={56}/>)}

  const Post = ({title, preview, minutes}) => {
    return (
      <div className="post">
        <h2> <a href="http://www.google.com" style={{textDecoration:"none",color:"inherit"}}>{title}</a></h2>
        <p>{preview}</p>
        <p>{minutes} min read</p>
      </div>
    )
  }

  const Posted = blogData.posts.map((post)=>{
    return <Post key={post.id} title={post.title} preview={post.preview} minutes={post.minutes} />
  })

  return (
    <div className="App">
      {Header}
      <Logo2/>
      {Name}
      {About}
      {Posted}
    </div>
  );
}

export default App;
