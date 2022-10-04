import { Link, Outlet } from "@remix-run/react";
import { Expander } from "~/components/Expander";

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
      {/* <Outlet /> */}
      <Expander className="Daniel">
        {(expanded) => (
          <div>
            <h1>Daniel Sadler</h1>
            <p>
              I am an aspiring web developer, looking to gain more knowledge
              with JS, JSX, Typescript and more.
            </p>
            <p>Click to see more</p>
            {expanded ? (
              <>
                <p>
                  Looking to start a career in web development, I started
                  learning HTML and CSS, using prior knowledge that I learnt
                  during School.
                </p>
                <p>
                  I quickly moved on to learning Javascript which led me into
                  React.
                </p>
              </>
            ) : null}
          </div>
        )}
      </Expander>
    </div>
  );
}
