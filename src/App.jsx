import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegistrationPage from "./pages/RegistrationPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          element={<HomePage />}
          path="/"
        ></Route>
        <Route
          element={<LoginPage />}
          path="/login"
        ></Route>
        <Route
          element={<ProfilePage />}
          path="/me"
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
