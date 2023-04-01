import { createBrowserRouter } from "react-router-dom";
import { BuymanPage } from "./pages/BuymanPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BuymanPage />,
  },
]);
