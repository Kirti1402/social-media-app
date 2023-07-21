import React, { useContext, useEffect } from "react";
import { UserContext } from "../../Context/allUser";
import { useNavigate, Link } from "react-router-dom";
import { authContext } from "../../Context/AuthContext";
import { PostContext } from "../../Context/PostContext";

export default function Header() {
  const { getUserPost } = useContext(PostContext);
  const { userDetailState, getUserData, userId, setUserId } =
    useContext(UserContext);
  let profile = userDetailState.users.filter(({ logged }) => logged === true);
  const { userDataState, userDataDispatch } = useContext(authContext);

  const getUserDataHandle = (id, username) => {
    getUserData(id);
    getUserPost(username);
  };

  const profileUser = JSON.parse(localStorage.getItem("User"));

  return (
    <div className="home-conatiner">
      <Link className="home-heading" to="/">
        Explore Together
      </Link>
      <div className="profile">
        {profileUser && profileUser.username && (
          <div>
            <Link
              to={`/profile/${profileUser.username}`}
              onClick={() =>
                getUserDataHandle(profileUser._id, profileUser.username)
              }
            >
              {profileUser.avatar? <img className="user-profile-image" src={profileUser.avatar} />: <img className="profile-image" src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg" />}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
