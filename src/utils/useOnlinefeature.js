import { useState } from "react";

const useOnlinefeature = () => {
  const [showOnline, setshowOnline] = useState("online");

  window.addEventListener("offline", () => {
    if (showOnline === "online") {
      setshowOnline("offline");
    }
  });
  window.addEventListener("online", () => {
    setshowOnline("online");
  });

  return showOnline;
};

export default useOnlinefeature;
