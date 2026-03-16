import { createBrowserRouter } from "react-router";
import { MainPage } from "./pages/MainPage";
import { GuestbookPage } from "./pages/GuestbookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/guestbook",
    Component: GuestbookPage,
  },
]);
