import * as ReactDOMClient from "react-dom/client";
import Signup from "./signup";

const container = document.getElementById("root");

const root = ReactDOMClient.createRoot(container);

root.render(
  <>
    <Signup />
  </>
);