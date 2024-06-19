import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

const Header = () => {
  const [search, setsearch] = useState("Make a Search");
  const getdata = async () => {
    let fetch = await fetch("https://api.github.com/users/NISHIKASAH");
    let data = await fetch.json();
    setsearch(data);
    console.log(data);
  };
  return (
    <div className="container">
      <div className="navbar">
        <div className="left">LOGO</div>
        <div className="middle">
          <input type="text" value={search} placeholder="Make a Search" />
        </div>
        <div className="right">{"\uF4D7"}</div>
      </div>
      <button onChange={getdata} className="btn">
        Submit
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
