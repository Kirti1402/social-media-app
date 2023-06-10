import React, { useRef, useReducer } from "react";
import Profile from "../../Assets/profile.jpg";
import Background from "../../Assets/background.jpg"
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
  const backgroundInputImageRef = useRef(null);
  const handleImageClick = () => {
    inputImageRef.current.click();
    
  };

  const handleOnChangeImage = (event) => {
    const file = event.target.files[0];
    const inputeFileType = event.target.name;
    if(inputeFileType === "profileImage")
    {
      if (file && file.type.includes("image")) {
        profileDispatch({ type: "SET_IMAGE", payload: file });
      } else {
        profileDispatch({
          type: "SET_IMAGE_ERROR",
          payload: "Invalid file type. Please select an image.",
        });
        console.log("Invalid file type. Please select an image.");
      }
    }else{
      console.log("else")
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

  return (
    <div>
      <div className="profile-card">
      <div className="background-image-container" onClick={()=> backgroundInputImageRef.current.click()}>
        {profileState.backgroundImage ? (
          <img  className="background-file-upload" src={URL.createObjectURL(profileState.backgroundImage)} alt="profile" />
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
          <img className="profile-image" src={URL.createObjectURL(profileState.image)} alt="profile" />
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
    </div>
  );
}
