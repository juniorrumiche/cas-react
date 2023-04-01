import { createBrowserRouter } from "react-router-dom";
import { Base } from "./components/Base";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
  },
]);
