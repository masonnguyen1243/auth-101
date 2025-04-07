import { MENU } from "defines";
import { Link } from "react-router";

export const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to={MENU.HOME}>Home</Link>
    </div>
  );
};
