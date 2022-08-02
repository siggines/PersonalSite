import { Link, Outlet } from "@remix-run/react";

export default function HomeMore() {
  return (
    <Link to="/home">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ/?autoplay=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Outlet />
    </Link>
  );
}
