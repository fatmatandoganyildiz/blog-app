import React from "react";
import Main from "./Main";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
      <div className="mx-14 my-12">POPULAR POSTS</div>
    </div>
  );
}

export default Home;
