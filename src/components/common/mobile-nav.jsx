import { Link } from "@tanstack/react-router";

export const MobileNav = () => {
  return (
    <nav className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{" "}
      <Link to="/translate" className="[&.active]:font-bold">
        About
      </Link>
    </nav>
  );
};
