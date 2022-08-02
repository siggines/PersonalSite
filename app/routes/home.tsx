import { Link, Outlet } from "@remix-run/react";

export default function Home() {
  return (
    <>
      <Daniel />
    </>
  );
}

export function Daniel() {
  return (
    <div className="DanielWrapper">
      <Link to="/home/more" className="Daniel">
        <h1>Daniel Sadler</h1>
        <p>
          I am an aspiring web developer, looking to gain more knowledge with
          JS, JSX, Typescript and more.
        </p>
        <p>Click to see more</p>

        <Outlet />
      </Link>
    </div>
  );
}
