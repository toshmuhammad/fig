import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Recipe, Recipes, Input, Search } from "./pages";

import MainLayout from "./layouts/MainLayout"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
        },
        {
          path: "input",
          element: <Input />,
        },
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;