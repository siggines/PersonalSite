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
    <div className="flex h-full justify-center ">
      <div className=" flex justify-center">
        {/* <Outlet /> */}
        <Expander className="text-white border-2 border-grey-200 border-solid p-10 rounded-md transition-all align-text-bottom max-w-[85%] relative z-1 cursor-pointer  bg-center  hover:bg-blue-100 hover:text-gray-500 duration-1000 flex mt-44">
          {(expanded) => (
            <div>
              <h1 className="mb-1">Daniel Sadler</h1>
              <p className="mb-1">
                I am a junior web developer, looking to gain more knowledge with
                JS, JSX, Typescript and more.
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
    </div>
  );
}
