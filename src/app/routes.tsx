import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { ThoughtfulSocial } from "./pages/ThoughtfulSocial";
import { Quidsplit } from "./pages/Quidsplit";
import { RealtyBot } from "./pages/RealtyBot";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/thoughtful-social",
    Component: ThoughtfulSocial,
  },
  {
    path: "/quidsplit",
    Component: Quidsplit,
  },
  {
    path: "/realtybot",
    Component: RealtyBot,
  },
]);
