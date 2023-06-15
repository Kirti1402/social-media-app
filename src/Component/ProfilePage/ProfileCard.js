import React, { useRef, useState, useEffect, useContext } from "react";
import Profile from "../../Assets/profile.jpg";
import Background from "../../Assets/background.jpg";
import { UserContext } from "../../Context/allUser";
import { FollowUnfollowcontext } from "../../Context/FollowUnFollowContext";

export default function ProfileCard() {
  const [showFollowers, setShowFollowers] = useState(false);

  const {
    userDetailState,
    profileState,
    profileDispatch,
    userDetailDispatch,
    getUserData,
  } = useContext(UserContext);
  const {
    followHandle,
    unFollowHandle,
    followUnfollow,
    setFollowUnfollow,
    followUnfollowIntialstate,
  } = useContext(FollowUnfollowcontext);

  const loggingUserDetail = JSON.parse(localStorage.getItem("User"));
  const userDetail = JSON.parse(localStorage.getItem("userDetail"));

  const detail = userDetailState.userData;

  const {
    _id,
    firstName,
    lastName,
    username,
    followers,
    following,
    logged,
    avatar,
    bio,
    backgroundImage,
  } = detail;

  console.log(detail);

  const handleFollowUnfollow = (_id) => {
    if (followUnfollow.includes(_id)) {
      const updatedArray = followUnfollow.filter((id) => id !== _id);
      unFollowHandle(_id);
      setFollowUnfollow(updatedArray);
    } else {
      followHandle(_id);
      setFollowUnfollow([...followUnfollow, _id]);
    }
  };

  return (
    <div>
      {detail && firstName && lastName && (
        <>
          <div className="avatar-user-detail">
            <img className="background-image" src={backgroundImage} />
            <div className="user-desc">
              <img className="profile-image" src={avatar} />
              <div className="username-desc">
                <p>{firstName + " " + lastName} </p>
                <p>{username}</p>
              </div>
            </div>
          </div>
          <div className="followers-following">
            <div className="follower-btn">
              <button onClick={() => setShowFollowers(!showFollowers)}>
                Followers :{followers.length}
              </button>
              {showFollowers && (
                <div className="followers-pop-up">
                  {followers.length > 0
                    ? followers.map(({ username }) => username)
                    : "0 followers"}
                </div>
              )}
            </div>
            <div>
              <p>Following : {following.length}</p>
            </div>
          </div>
          <div>
            {logged ? (
              <button>Log Out</button>
            ) : (
              <button onClick={() => handleFollowUnfollow(_id)}>
                {followUnfollow.includes(_id) ? "UnFollow" : "Follow"}
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
