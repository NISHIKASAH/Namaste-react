//-----------------HOW TO CREATE ELEMENT IN REACT-------------
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abs" },
  "hello world"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
/*
1.heading is a object , inside this obj   , h1 elem is stored inside props key
2.to render anything on dom ,root need to be created.
3.render extract h1 elem from heading obj and  push on root

*/

//----------------HOW TO CREATE NESTED STRUCTURE INSIDE REACT-------------------
/*
create nested structure inside html
<div id="parent">
<div id="child">
<h1>I'm a h1 tag</h1>
<h2>I'm a h2 tag</h2>
</div>
<div id="child">
<h1>I'm a h1 tag</h1>
<h2>I'm a h2 tag</h2>
</div>
</div>
*/
//this is how we create nested structure inside react
const heading2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(heading2);
