import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./Component/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Component/HomePage/HomePage";
import { ProtectedRoutes } from "./ProtectedRoutes";
import SignUpPage from "./Component/SignupPage/SignUpPage";
import Profile from "./Component/ProfilePage/Profile";
import TrendingPost from "./Component/TrendingPost/TrendingPost";
import LikedPage from "./Component/LikedPost/LikedPage";
import BookMarkedPage from "./Component/BookMarked/BookMarkedPage";
import Explore from "./Component/Explore/Explore";


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/trendingPost" element={<TrendingPost />} />
        <Route path="/likedPost" element={<LikedPage />} />
        <Route path="/bookmarkedPost" element={<BookMarkedPage/>} />
        <Route path="/explore" element={<Explore/>} />
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
