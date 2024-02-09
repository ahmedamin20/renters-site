import "./App.css";
import Wrapper from "./components/common/layout";
import { ReactQueryProvider } from "./utils/providers/query";
import { ThemeProvider } from "./utils/providers/theme";
import HomePage from "./components/home/homePage/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OneProductPage from "./components/common/oneProduct/oneProductPage";
import ProfilePageComponent from "./components/home/profile/profilePage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/product",
          element: <OneProductPage />,
        },
        {
          path: "/profile",
          element: <ProfilePageComponent />,
        },
      ],
    },
  ]);

  return (
    <div style={{ width: "100%" }}>
      <ReactQueryProvider>
        <ThemeProvider>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </ReactQueryProvider>
    </div>
  );
}

export default App;
