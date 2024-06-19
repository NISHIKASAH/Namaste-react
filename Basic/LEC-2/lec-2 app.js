import React from "react";
import ReactDOM from "react-dom/client";
//---------React Element------

const heading = (
  <h1 id="heading" tabIndex="0">
    I'm heading h1
  </h1>
);

const elem = <h1>I am javascript element</h1>;
//-----------React Components--------
const Heading2 = () => {
  return (
    <div>
      <h1 id="heading" tabIndex="0">
        I am react functional components
      </h1>
      {elem}
    </div>
  );
};
//---------Component Composition---------------
//component inside component
function ComponentComp() {
  //to write javascript inside jsx  {}  is used
  const data = 1000;
  console.log(data);
  return (
    <div>
      <h1>This is example of component Composition</h1>
      <Heading2 />
      <Heading2></Heading2>
      {Heading2()}
      {console.log(data)}
      {heading}
    </div>
  );
}

//component inside element

const element = (
  <div>
    <h1>Here we are using component inside elem</h1>
    <ComponentComp />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
//Use to Render React Element
// root.render(heading);

//Use to Render React functional components
// root.render(<Heading2 />);

// root.render(<ComponentComp />);

//inside react element , a component can be rendered
root.render(element);
