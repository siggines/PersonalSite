import { NavLink } from "@remix-run/react";

export function Header() {
  return (
    <header>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <ul>
        <li>
          <NavLink to="/">
            <span className="material-symbols-outlined">Home</span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/map">
            <span className="material-symbols-outlined">map</span>Map
          </NavLink>
        </li>
        <li>
          <NavLink to="/mixes">
            <span className="material-symbols-outlined">music_note</span>Mixes
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            <span className="material-symbols-outlined">chat</span>Contact
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
