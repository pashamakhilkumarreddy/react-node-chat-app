import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="columns is-centered is-vcentered">
        <div className="column is-full has-text-centered">
          <h2 className="h1 is-size-1">Oops! Page Not Found</h2>
          <Link to="/" className="mt-3 button is-info">
            Go to Home!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
