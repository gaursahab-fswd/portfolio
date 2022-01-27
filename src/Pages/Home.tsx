import React from "react";
import Navigation from "../Components/Navigation";

const Home = () => {
  return (
    <div className="container-fluid bg-dark">
      <Navigation />
      <div className="container pt-4 text-light">
        <div className="row">
          <div className="w-100"></div>
          <div className="col">col</div>
          <div className="col">col</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
