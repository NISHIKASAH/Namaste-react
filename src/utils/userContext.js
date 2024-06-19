import { createContext } from "react";

const userContext = createContext({
  userName: "Default",
  Age: 22,
});

export default userContext;
