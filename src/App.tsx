import "./App.css";
import { theme } from "./theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import NotFound from "./layout/notFound/notFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./layout/mainPage/mainPage";
import SignIn from "./layout/signIn/signIn";
import SignUp from "./layout/signUp/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "sign-in",
    element: <SignIn/>,
  },
  {
    path: "sign-up",
    element: <SignUp/>,
  },
  {
    path: "not-found",
    element: <NotFound/>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
