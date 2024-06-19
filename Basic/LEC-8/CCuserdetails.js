import React from "react";

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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
    const { count } = this.state;
    const { name, avatar_url, company } = this.state.userinfo;
    //console.log(this.props.sequence + " child render is called");

    return (
      <div>
        <ul>
          <li>count:{count}</li>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Increase Button
          </button>
          <br />
          <img width="100px" src={avatar_url} alt="photo" />
          <li>Name : {name}</li>
          <li>Company : {company}</li>
          {/* <li>Email : {email}</li>
          <li>PhoneNo : {phoneno}</li> */}
        </ul>
      </div>
    );
  }
}

export default UserDetails;
