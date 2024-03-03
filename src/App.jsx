import "./App.css";
import Wrapper from "./components/common/layout";
import { ReactQueryProvider } from "./utils/providers/query";
import { ThemeProvider } from "./utils/providers/theme";
import HomePage from "./components/home/homePage/home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import OneProductPage from "./components/common/oneProduct/oneProductPage";
import ProfilePageComponent from "./components/home/profile/profilePage";
import Signup from "./components/auth/signUp/signup";
import RequestSection from "./components/requsets/requsetSection";
import UserAndOrderPage from "./components/common/userAndOrderScreen/userAndOrderPage";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Wrapper />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/product/:id",
          element: <OneProductPage />,
        },
        {
          path: "/profile",
          element: <ProfilePageComponent />,
        },
        {
          path: "/requests",
          element: <RequestSection />,
        },
        {
          path: "/user/:user_id/order/:order_id",
          element: <UserAndOrderPage />,
        },
      ],
    },
    {
      path: "/signup",
      element: <Signup />,
    }
  ]);

  return (
    <div style={{ width: "100%" }}>
      <ReactQueryProvider>
        <ThemeProvider>
          <Toaster position="top-center"/>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </ReactQueryProvider>
    </div>
  );
}

export default App;
