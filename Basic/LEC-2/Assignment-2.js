//---------ASSIGNMENT-2 Laying the foundation -------------
/*Create a Nested header Element using React.createElement(h1,h2,h3 inside a
div with class “title”)
*/
import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { className: "title" }, [
  <h1>I'm heading h1</h1>,
  <h2>I'm heading h2</h2>,
  <h3>I'm heading h3</h3>,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);

/*---Creating same using element using jsx-----*/

const heading1 = (
  <div className="title">
    <h1>Example for React Element</h1>
    <h1>I'm heading h1</h1>
    <h2>I'm heading h2</h2>
    <h3>I'm heading h3</h3>
  </div>
);
//root.render(heading1);

/* Create a functional component of the same with JSX*/
const Heading2 = () => {
  return (
    <div className="title">
      <h1>Example for React Function</h1>
      <h1>I'm heading h1</h1>
      <h2>I'm heading h2</h2>
      <h3>I'm heading h3</h3>
    </div>
  );
};
// root.render(<Heading2 />);

/* Composition of Component(Add a component inside another) */

const CompositionComp = () => {
  const data = 1000;
  return (
    <div>
      <h1>Example for Composition compoonent</h1>
      <Heading2 />
      {Heading2()}
      <Heading2></Heading2>
      <p>To run javascript code inside JSX ,use curly bracet</p>
      {heading}
      <h1> {data}</h1>
      {console.log(data)}
    </div>
  );
};
root.render(<CompositionComp />);
