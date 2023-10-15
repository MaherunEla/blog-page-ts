import React from "react";
import AboutDetails from "./Components/AboutDetails";
import AboutBlog from "./Components/AboutBlog";
import Author from "./Components/Author";
import JoinTeam from "../home/components/JoinTeam";

const page = () => {
  return (
    <>
      <AboutDetails />
      <AboutBlog />
      <Author />
      <JoinTeam />
    </>
  );
};

export default page;
