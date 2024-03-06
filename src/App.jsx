import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";
import PrivateRoute from "./routes/PrivateRoutes";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          element={<PrivateRoute />}
          path="/"
        >
          <Route
            element={<HomePage />}
            path="/"
            exact
          />
          <Route
            element={<ProfilePage />}
            path="/me"
          />
        </Route>
        <Route
          element={<LoginPage />}
          path="/login"
        ></Route>
        <Route
          element={<RegistrationPage />}
          path="/register"
        ></Route>
        <Route
          element={<NotFoundPage />}
          path="*"
        ></Route>
      </Routes>
    </>
  );
};

export default App;
