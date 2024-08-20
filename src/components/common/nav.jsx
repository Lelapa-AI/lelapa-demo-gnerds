import { Link } from "@tanstack/react-router";
import { IoHome } from "react-icons/io5";
import { MdOutlineTranslate } from "react-icons/md";
import { IoIosCamera } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { SiGoogletasks } from "react-icons/si";

import { useScreen } from "../../hooks";

export const Nav = () => {
  const { isFullScreen } = useScreen();

  return (
    <>
      <nav className="web invisible h-0 lg:visible lg:h-fit">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/translate" className="[&.active]:font-bold">
          Translate
        </Link>{" "}
        <Link to="/language" className="[&.active]:font-bold">
          Language
        </Link>{" "}
        <Link to="/converse" className="[&.active]:font-bold">
          Converse
        </Link>{" "}
        <Link to="/project" className="[&.active]:font-bold">
          Project
        </Link>
      </nav>

      {!isFullScreen && (
        <nav className="mobile absolute w-full bottom-0 visible lg:hidden flex justify-evenly items-center text-xs px-2 py-2">
          <Link to="/" className="[&.active]:font-bold [&.active]:text-primary">
            {({ isActive }) => (
              <section className="flex flex-col justify-center items-center">
                <IoHome
                  className={`w-6 h-6 ${isActive ? "text-primary" : "text-grey"}`}
                />
                Home
              </section>
            )}
          </Link>
          <Link
            to="/translate"
            className="[&.active]:font-bold [&.active]:text-primary"
          >
            {({ isActive }) => (
              <section className="flex flex-col justify-center items-center">
                <MdOutlineTranslate
                  className={`w-6 h-6 ${isActive ? "text-primary" : "text-grey"}`}
                />
                Translate
              </section>
            )}
          </Link>
          <Link
            to="/language"
            className="[&.active]:font-bold [&.active]:text-primary"
          >
            {({ isActive }) => (
              <section className="flex flex-col justify-center items-center">
                <IoIosCamera
                  className={`w-6 h-6 ${isActive ? "text-primary" : "text-grey"}`}
                />
                Language
              </section>
            )}
          </Link>
          <Link
            to="/converse"
            className="[&.active]:font-bold [&.active]:text-primary"
          >
            {({ isActive }) => (
              <section className="flex flex-col justify-center items-center">
                <IoPeople
                  className={`w-6 h-6 ${isActive ? "text-primary" : "text-grey"}`}
                />
                Converse
              </section>
            )}
          </Link>
          <Link
            to="/project"
            className="[&.active]:font-bold [&.active]:text-primary"
          >
            {({ isActive }) => (
              <section className="flex flex-col justify-center items-center">
                <SiGoogletasks
                  className={`w-6 h-6 ${isActive ? "text-primary" : "text-grey"}`}
                />
                Tickets
              </section>
            )}
          </Link>
        </nav>
      )}
    </>
  );
};
