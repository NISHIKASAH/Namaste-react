import UserDetails from "./UserDetails";
import React from "react";

const userdata = {
  name: "mannu",
  email: "nishikasha1223@gmail.com",
  phoneno: 7654324689,
};
const userdata2 = {
  name: "tanu",
  email: "tanu23@gmail.com",
  phoneno: 946789027,
};

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor is called");
  }
  componentDidMount() {
    console.log("parent mounting is completed");
  }
  render() {
    console.log("parent render is called");
    return (
      <div>
        <h1>hello!! i am {userdata2.name}</h1>
        <UserDetails sequence={"first"} getdata={userdata} />
        {/* <UserDetails sequence={"second"} getdata={userdata2} /> */}
      </div>
    );
  }
}
export default About;
