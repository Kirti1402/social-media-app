import React, { useRef, useState, useEffect, useContext } from "react";
import Profile from "../../Assets/profile.jpg";
import Background from "../../Assets/background.jpg";
import { UserContext } from "../../Context/allUser";
import { FollowUnfollowcontext } from "../../Context/FollowUnFollowContext";

export default function ProfileCard() {


  const { userDetailState, profileState, profileDispatch, userDetailDispatch,getUserData } =
    useContext(UserContext);
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

  const { _id, firstName, lastName, username, followers, following, logged ,avatar,bio,backgroundImage} =
    detail;

    console.log(detail)

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
        <p><img className="background-image" src={backgroundImage}/></p>
          <p><img className="profile-image" src={avatar}/></p>
          <p>{firstName + " " + lastName} </p>
          <p>{username}</p>
          <p>Followers :{followers.length}</p>
          <p>Following : {following.length}</p>

          {logged ? (
            <button>Log Out</button>
          ) : (
            <button onClick={() => handleFollowUnfollow(_id)}>
              {followUnfollow.includes(_id) ? "UnFollow" : "Follow"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
