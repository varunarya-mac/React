import { useState } from "react";
import "./Accordion.css";

interface props {
  title: string;
  child: React.ReactNode;
}

export function Accordion(props: props): JSX.Element {
  const [state, setState] = useState(false);

  const pressed = () => {
    setState(!state);
  };

  return (
    <div className="container">
      <h2 id="title" className={
          state
            ?"accordion-heading accordion-arrowup"
            : "accordion-heading accordion-arrowdown"}>
        <div onClick={pressed}>
          {props.title}
        </div>
      </h2>

      <div
        aria-labelledby="title"
        className={
          state
            ? "accordion-content"
            : "accordion-content accordion-content-expended"
        }
      >
        <div>{props.child}</div>
      </div>
    </div>
  );
}
