import { NavLink } from "@remix-run/react";

export function Header() {
  return (
    <header className="bg-slate-600 h-14 text-white text-sm">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <ul className="list-none h-full flex flex-row items-center p-2 justify-end">
        <li className=" mr-2 rounded-md hover:bg-white hover:bg-opacity-25 p-1 duration-700">
          <NavLink to="/">
            <span className="material-symbols-outlined">Home</span>
            Home
          </NavLink>
        </li>
        <li className=" mr-2 rounded-md hover:bg-white hover:bg-opacity-25 p-1 duration-700">
          <NavLink to="/map">
            <span className="material-symbols-outlined">map</span>Map
          </NavLink>
        </li>
        <li className=" mr-2 rounded-md hover:bg-white hover:bg-opacity-25 p-1 duration-700">
          <NavLink to="/mixes">
            <span className="material-symbols-outlined">music_note</span>Mixes
          </NavLink>
        </li>
        <li className=" mr-2 rounded-md hover:bg-white hover:bg-opacity-25 p-1 duration-700">
          <NavLink to="/contact">
            <span className="material-symbols-outlined">chat</span>Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
