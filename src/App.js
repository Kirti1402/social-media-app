import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Component/LoginPage/LoginPage";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import SignUpPage from "./Component/SignupPage/SignUpPage";
import Profile from "./Component/ProfilePage/Profile";
import TrendingPost from "./Component/TrendingPost/TrendingPost";
import BookMarked from "./Component/BookMarked/BookMarked";
import LikedPage from "./Component/LikedPost/LikedPage";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/trendingPost" element={<TrendingPost />} />
        <Route path="/likedPost" element={<LikedPage />} />
        <Route path="/bookmarkedPost" element={<BookMarked />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <HomePage />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/profile/:username"
          element={
            <ProtectedRoutes>
              <Profile  />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
