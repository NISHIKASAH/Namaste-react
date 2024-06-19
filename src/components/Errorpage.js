import { useRouteError } from "react-router-dom";
const Errorpage = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>We Encounter a Error!!</h2>
      <p>
        {err.status}:{err.statusText}
      </p>
    </div>
  );
};
export default Errorpage;
