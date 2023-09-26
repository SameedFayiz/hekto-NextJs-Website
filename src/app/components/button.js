"use client";
import { useEffect, useState } from "react";
import is_touch_enabled from "../api/touchDetect";
const ButtonOne = (props) => {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(is_touch_enabled());
  }, []);
  return (
    <button
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
        touch ? "bg-opacity-80" : "hidden"
      } group-hover:flex place-items-center px-6 py-2 rounded-md font-medium transition ease-in-out delay-150 text-white bg-pink-500 hover:bg-pink-600 hover:scale-110 duration-200`}
      onClick={props.onclick ? props.onclick : () => {}}
    >
      {props.children}
    </button>
  );
};
export { ButtonOne };
