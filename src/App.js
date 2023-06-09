import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Component/LoginPage/LoginPage";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import LandingPage from "./Component/HomePage/LandingPage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import SignUpPage from "./Component/SignupPage/SignUpPage";
import Profile from "./Component/ProfilePage/Profile";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path='/login' element={<LoginPage />}/> */}
        <Route
          path="/landing"
          element={
            <ProtectedRoutes>
              <LandingPage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
