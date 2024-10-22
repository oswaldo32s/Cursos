import Root from "./Root";
import Profile from "./Profile";
import ErrorPage from "./ErrorPage";
import Home from "./Home";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home/>},
      {
        path: "profile/:name",
        element: <Profile />,
      },
    ]
  },

];

export default routes;
