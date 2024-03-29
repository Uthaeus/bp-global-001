import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./components/main-layout";
import AuthLayout from "./components/auth/auth-layout";
import AccountLayout from "./components/account/account-layout";
import AccountHome from "./components/account/account-home";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import ErrorPage from "./components/error";
import HomePage from "./pages/homepage";
import AboutPage from "./pages/aboutpage";
import ContactPage from "./pages/contactpage";
import ConcreteForms from "./pages/concrete-forms";
import Plywoods from "./pages/plywoods";
import DimensionalLumber from "./pages/dimensional-lumber";
import Profile from "./components/account/profile";
import CurrentOrders from "./components/orders/current-orders";
import OrderHistory from "./components/orders/order-history";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/concrete-forms',
        element: <ConcreteForms />
      },
      {
        path: '/plywoods',
        element: <Plywoods />
      },
      {
        path: '/dimensional-lumber',
        element: <DimensionalLumber />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: '/auth/register',
        element: <Register />
      }
    ]
  },
  {
    path: '/account',
    element: <AccountLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AccountHome />
      },
      {
        path: '/account/current-orders',
        element: <CurrentOrders />
      },
      {
        path: '/account/history',
        element: <OrderHistory />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
