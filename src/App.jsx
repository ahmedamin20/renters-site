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
import ProductForm from "./components/products/productForm";
import SignupForm from "./components/auth/signUp/signupForm";
import ProfileForm from "./components/home/profile/profileForm";
import { ROUTE } from "./utils/config/constantRoutes";
import PasswordForm from "./components/home/profile/passwordForm";
import OutcomRequestSection from "./components/requsets/outcomeRequsetSection";
import MyProductsSection from "./components/home/profile/myProducts/myProductsSection";

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
          children:[
            {
              path: ROUTE.PROFILE_ROUTE.PROFILE,
              element: <ProfileForm />,
            },
            {
              path: ROUTE.PROFILE_ROUTE.CHANGE_PASSWORD,
              element: <PasswordForm />,
            },
            {
              path: ROUTE.PROFILE_ROUTE.MY_PRODUCTS,
              element: <MyProductsSection />,
            },
            {
              path: ROUTE.PROFILE_ROUTE.INCOM_REQUSETS,
              element: <RequestSection />,
            },
            {
              path: ROUTE.PROFILE_ROUTE.OUTCOM_REQUSETS,
              element: <OutcomRequestSection />,
            },
          ]
        },
        {
          path: "/productForm",
          element: <ProductForm />,
        },
        
        {
          path: "/user/:user_id/order/:order_id",
          element: <UserAndOrderPage />,
        },
      ],
    },
    {
      path: "/signup",
      element: <SignupForm />,
    }
  ]);

  return (
    // <div style={{ width: "100%" }}>
      <ReactQueryProvider>
        <ThemeProvider>
          <Toaster position="top-center"/>
          <RouterProvider router={routes} />
        </ThemeProvider>
      </ReactQueryProvider>
    // </div>
  );
}

export default App;
