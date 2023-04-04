import { createBrowserRouter } from "react-router-dom";
import { Base } from "./components/base/Base";
import { BuymanPage } from "./pages/BuymanPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
  },
  {
    path: "/admin/dashboard",
    element: <Base />,
  },

  {
    path: "/admin/buyman",
    element: <BuymanPage />,
  },
]);
