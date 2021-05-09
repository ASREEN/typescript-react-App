import React, { Fragment } from "react";
import ReactDOM from "react-dom";

export default function App(): JSX.Element {
  const sum = (a: number, b: number): number => {
    return a + b;
  };
  return (
    <Fragment>
      <div>
        <h1>Todo List</h1>
        <form>
          <input type="text" required />
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </Fragment>
  );
}
const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
