import { Toaster } from "react-hot-toast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import RegistartionForm from "./components/auth/register/Register";
import Wrapper from "./components/common/layout";
import OneProductPage from "./components/common/oneProduct/oneProductPage";
import UserAndOrderPage from "./components/common/userAndOrderScreen/userAndOrderPage";
import ContactUs from "./components/contactUs";
import HomePage from "./components/home/homePage/home";
import MyProductsSection from "./components/home/profile/myProducts/myProductsSection";
import PasswordForm from "./components/home/profile/passwordForm";
import ProfileForm from "./components/home/profile/profileForm";
import ProfilePageComponent from "./components/home/profile/profilePage";
import ProductForm from "./components/products/productForm";
import ProductsByCategory from "./components/products/productsByCategory";
import ProductsSection from "./components/products/productsSection";
import OutcomRequestSection from "./components/requsets/outcomeRequsetSection";
import RequestSection from "./components/requsets/requsetSection";
import { ROUTE } from "./utils/config/constantRoutes";
import { ReactQueryProvider } from "./utils/providers/query";
import { ThemeProvider } from "./utils/providers/theme";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Wrapper />,
      children: [
        {
          path: "",
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
            {
              path: ROUTE.PROFILE_ROUTE.ADD_PRODUCTS,
              element: <ProductForm />,
            },
            {
              path: ROUTE.PROFILE_ROUTE.Show_MY_PRODUCT_REQUEST,
              element: <UserAndOrderPage />,
            },
            {
              path: ROUTE.PROFILE_ROUTE.EDIT_PRODUCTS,
              element: <ProductForm />,
            },
            
          ]
        },
        {
          path: ROUTE.ContactUs,
          element: <ContactUs />,
        },
        {
          path: ROUTE.PRODUCTSByCatigory,
          element: <ProductsByCategory />,
        },
        {
          path: ROUTE.ALL_PRODUCTS,
          element: <ProductsSection />,
        },
        
      ],
    },
    {
      path: "/signup",
      element: <RegistartionForm />,
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
