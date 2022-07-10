import React from "react";
import Routes from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="container is-fluid mt-5">
        <Routes />
      </main>
      <Footer />
    </>
  );
};

export default App;
