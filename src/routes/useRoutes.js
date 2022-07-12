import MainLayout from "../HOC/MainLayout";
import CategoryPage from "../pages/CategoryPage/CategoryPage";
import DetailPage from "../pages/DetailPage/DetailPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import UserPage from "../pages/UserPage/UserPage";

export const usePublicRoutes = [
  {
    path: "/",
    component: <MainLayout Component={HomePage} />,
    exact: true,
    isUseLayout: true,
  },
  {
    path: "/detail/:id",
    component: <MainLayout Component={DetailPage} />,
    isUseLayout: true,
  },
  {
    path: "/category/:id",
    component: <MainLayout Component={CategoryPage} />,
    isUseLayout: true,
  },
  {
    path: "/user",
    component: <MainLayout Component={UserPage} />,
    isUseLayout: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
];
