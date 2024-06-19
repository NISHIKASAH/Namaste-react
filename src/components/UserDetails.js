import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //here are varaible behave like a object
      age: 27,
      salary: 15000,
      userinfo: {},
    };
    //console.log(this.props.sequence + " child constructor is called ");
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    //setting object with api value , this happend during updating phase
    this.setState({
      userinfo: json,
    });
  }
  render() {
    const { getdata } = this.props;
    //const { name, email, phoneno } = getdata;
    const { salary, age } = this.state;
    const { name, avatar_url, company } = this.state.userinfo;
    //console.log(this.props.sequence + " child render is called");

    return (
      <div>
        <ul>
          <img width="100px" src={avatar_url} alt="photo" />
          <li>Name : {name}</li>
          <li>Age : {age}</li>
          <li>Company : {company}</li>
          <li>Salary:{salary}</li>
          <button
            onClick={() => {
              this.setState({
                salary: this.state.salary * 2,
              });
            }}
          >
            Increase Button
          </button>
          <br />
          {/* <li>Email : {email}</li>
          <li>PhoneNo : {phoneno}</li> */}
        </ul>
      </div>
    );
  }
}

export default UserDetails;
