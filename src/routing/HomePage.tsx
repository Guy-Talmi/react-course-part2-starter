import { Link } from "react-router-dom";

const HomePage = () => {

  //throw new Error("Somthing failed");

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Incidunt, mollitia!
      </p>
      <Link to="/users">users</Link>
    </>
  );
};

export default HomePage;
