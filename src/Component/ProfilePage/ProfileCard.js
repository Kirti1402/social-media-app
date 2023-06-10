import React, { useRef, useReducer } from "react";
import Profile from "../../Assets/profile.jpg";
import {
  profilIntialstate,
  profileReducer,
} from "../../Reducer/ProfileReducer";

export default function ProfileDetail() {
  const [profileState, profileDispatch] = useReducer(
    profileReducer,
    profilIntialstate
  );
  const inputImageRef = useRef(null);
  const handleImageClick = () => {
    inputImageRef.current.click();
  };

  const handleOnChangeImage = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes("image")) {
      profileDispatch({ type: "SET_IMAGE", payload: file });
    } else {
      profileDispatch({
        type: "SET_IMAGE_ERROR",
        payload: "Invalid file type. Please select an image.",
      });
      console.log("Invalid file type. Please select an image.");
    }
  };

  return (
    <div>
      <div className="image-container" onClick={handleImageClick}>
        {profileState.image ? (
          <img src={URL.createObjectURL(profileState.image)} alt="profile" />
        ) : (
          <img src={Profile} alt="" />
        )}
        <input
          accept="image/*"
          className="image-file-upload"
          type="file"
          ref={inputImageRef}
          onChange={handleOnChangeImage}
        />
      </div>
    </div>
  );
}
