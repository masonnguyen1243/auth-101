import { MENU } from "defines";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to={MENU.ABOUT}>About</Link>
    </div>
  );
};
