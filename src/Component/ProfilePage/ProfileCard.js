import React, { useRef, useState, useEffect, useContext } from "react";
import Profile from "../../Assets/profile.jpg";
import Background from "../../Assets/background.jpg";
import { UserContext } from "../../Context/allUser";
import { FollowUnfollowcontext } from "../../Context/FollowUnFollowContext";

export default function ProfileCard() {
  const { userDetailState, profileState, profileDispatch, userDetailDispatch } =
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

  const detail = userDetail;

  const { _id, firstName, lastName, username, followers, following, logged } =
    detail;

  const inputImageRef = useRef(null);
  const backgroundInputImageRef = useRef(null);

  const handleImageClick = () => {
    inputImageRef.current.click();
  };

  const handleOnChangeImage = (event) => {
    const file = event.target.files[0];
    const inputeFileType = event.target.name;
    if (inputeFileType === "profileImage") {
      if (file && file.type.includes("image")) {
        profileDispatch({ type: "SET_IMAGE", payload: file });
      } else {
        profileDispatch({
          type: "SET_IMAGE_ERROR",
          payload: "Invalid file type. Please select an image.",
        });
        console.log("Invalid file type. Please select an image.");
      }
    } else {
      if (file && file.type.includes("image")) {
        profileDispatch({ type: "SET_BACKGROUND_IMAGE", payload: file });
      } else {
        profileDispatch({
          type: "SET_IMAGE_ERROR",
          payload: "Invalid file type. Please select an image.",
        });
        console.log("Invalid file type. Please select an image.");
      }
    }
  };

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
      <div className="profile-portfolio">
        <div
          className="background-image-container"
          onClick={() => backgroundInputImageRef.current.click()}
        >
          {profileState.backgroundImage ? (
            <img
              className="background-file-upload"
              src={URL.createObjectURL(profileState.backgroundImage)}
              alt="profile"
            />
          ) : (
            <img className="background-file-upload" src={Background} alt="" />
          )}
          <input
            accept="image/*"
            className="image-file-upload"
            type="file"
            ref={backgroundInputImageRef}
            onChange={handleOnChangeImage}
          />
        </div>
        <div className="profile-image-container" onClick={handleImageClick}>
          {profileState.image ? (
            <img
              className="profile-image"
              src={URL.createObjectURL(profileState.image)}
              alt="profile"
            />
          ) : (
            <img className="profile-image" src={Profile} alt="" />
          )}
          <input
            name="profileImage"
            accept="image/*"
            className="image-file-upload"
            type="file"
            ref={inputImageRef}
            onChange={handleOnChangeImage}
          />
        </div>
      </div>

      {detail && firstName && lastName && (
        <>
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
