import React from "react";
import "./App.css";
import Header from "./component/home_nav/Header";
import Home from "./component/home_nav/Home";

function App() {
  return (
    <div className="app">
      <>
        {/* Header*/}
        <Header />
        {/* Home */}
        <Home />
      </>
    </div>
  );
}

export default App;
