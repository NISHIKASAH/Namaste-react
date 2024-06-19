import { useContext } from "react";
import UserContext from "../utils/userContext";
const Contact = () => {
  //-----using React Context-----
  const userobj = useContext(UserContext);
  return (
    <div>
      <h4>Contact US Below</h4>
      <h1>{userobj.userName}</h1>
      <h2>{userobj.Age}</h2>
      <h1>Nishikasha12345@gmail.com</h1>
    </div>
  );
};
export default Contact;
