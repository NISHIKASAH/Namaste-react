import { useState } from "react";

const LoginPage = () => {
  const [registration, setRegistration] = useState({
    username: "",
    email: "",
    password: "",
    phoneno: "",
    issue: "",
  });
  const [record, setRecord] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegistration({ ...registration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newrecord = { ...registration, id: new Date().getTime().toString() };
    setRecord([...record, newrecord]);
    setRegistration({
      username: "",
      email: "",
      password: "",
      phoneno: "",
      issue: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-5/12 h-96 border border-yellow-800 mx-auto px-2 py-5 mt-20 shadow-lg shadow-orange-300 rounded-md text-center">
        <div className="p-3">
          <label className="font-medium">Name:</label>
          <input
            className="w-3/6 ml-4 border border-gray-600 rounded-md "
            type="text"
            name="username"
            value={registration.username}
            onChange={handleChange}
          />
        </div>
        <div className="p-3">
          <label className="font-medium">Email:</label>
          <input
            className="w-3/6 ml-4 border border-gray-600 rounded-md"
            type="email"
            name="email"
            value={registration.email}
            onChange={handleChange}
          />
        </div>
        <div className="p-3">
          <label className="font-medium">Password:</label>
          <input
            className="w-3/6 ml-4 border border-gray-600 rounded-md"
            type="password"
            name="password"
            value={registration.password}
            onChange={handleChange}
          />
        </div>
        <div className="p-3">
          <label className="font-medium">phoneNo:</label>
          <input
            className="w-3/6 ml-4 border border-gray-600 rounded-md"
            type="text"
            name="phoneno"
            value={registration.phoneno}
            onChange={handleChange}
          />
        </div>
        <div className="p-3">
          <label className="font-medium">Issue:</label>
          <textarea
            className="w-3/6 ml-4 border border-gray-600 rounded-md"
            type="text"
            name="issue"
            value={registration.issue}
            onChange={handleChange}
          />
        </div>
        <button className="flex mx-auto bg-orange-600 text-gray-100 px-4 py-1 rounded-md hover:bg-orange-700 ">
          Submit
        </button>
      </div>
      <div className="w-9/12  border border-yellow-800 mx-auto px-2 py-5 mt-5 shadow-lg shadow-orange-300 rounded-md text-center">
        {record.map((x) => (
          <div className="flex justify-around" key={x.id}>
            <span>{x.username}</span>
            <span>{x.email}</span>
            <span>{x.password}</span>
            <span>{x.phoneno}</span>
            <span>{x.issue}</span>
          </div>
        ))}
      </div>
    </form>
  );
};

export default LoginPage;
