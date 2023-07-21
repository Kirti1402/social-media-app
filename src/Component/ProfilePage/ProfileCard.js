import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/allUser";
import { FollowUnfollowcontext } from "../../Context/FollowUnFollowContext";
import { PostContext } from "../../Context/PostContext";
import { Link, useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";

export default function ProfileCard() {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);

  const navigate = useNavigate()
  const loggedInUser = JSON.parse(localStorage.getItem("User"));
  const {
    userDetailState,
    getUserData,
    editProfileBtn,setEditProfileBtn
  } = useContext(UserContext);
  const {
    followHandle,
    unFollowHandle,
    followUnfollow,
    setFollowUnfollow,
  } = useContext(FollowUnfollowcontext);
  const {getUserPost} = useContext(PostContext);
  const detail = userDetailState.userData;
  console.log("detail",detail)

  const {
    _id,
    firstName,
    lastName,
    username,editBio,
    followers,
    following,
    logged,
    avatar,
    bio,
    link,editLink,
    backgroundImage,
  } = detail;


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

  const handleAvatarClick = (id,username) =>{
    getUserData(id)
    getUserPost(username);
  }

  const handleLogOut = () =>{
    localStorage.removeItem("EncodedToken");
    localStorage.removeItem("User");
    localStorage.removeItem("userDetail");
    navigate("/")
  }

  return (
    <div className="profile-card">
      {detail && firstName && lastName && (
        <>
          <div className="avatar-user-detail">
            {backgroundImage ? <img className="background-image" src={backgroundImage} /> :<img className="background-image" src="https://img.freepik.com/free-psd/travel-sales-background_23-2150350125.jpg" />}
            <div className="user-desc">
              {avatar? <img className="avatar-image" src={avatar} />: <img className="profile-image" src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg" />}
              <div className="username-desc">
                <p style={{fontWeight:'700',fontSize:'18px'}}>{firstName + " " + lastName} </p>
                <p>{username}</p>
              </div>
            </div>
          </div>
          <div className="bio-detail">
            <p><span>Bio:</span>  <span>{bio}</span></p>
            <p><span>Profile:</span> <a href={link} target="#">{link}</a> </p>
          </div>
          <div className="followers-following">
            <div className="follower-btn">
              <button onClick={() => setShowFollowers(!showFollowers)}>
                Followers :{followers.length}
              </button>
              {showFollowers && (
                <div className="followers-pop-up">
                  {followers.length > 0
                    ? followers.map(({ _id,username }) => <Link className="link-user-display" to={`/profile/${username}`} onClick={()=>handleAvatarClick(_id,username,avatar)} >{username}</Link>)
                    : "0 followers"}
                </div>
              )}
            </div>
            <div className="follower-btn">
              <button onClick={() => setShowFollowing(!showFollowing)}>
                Following :{following.length}
              </button>
              {showFollowing && (
                <div className="followers-pop-up">
                  {following.length > 0
                    ? following.map(({ _id,username }) => <Link className="link-user-display" to={`/profile/${username}`} onClick={()=>handleAvatarClick(_id,username)} >{username}</Link>)
                    : "0 following"}
                </div>
              )}
            </div>
          </div>
          <div className="action-btn">
            {(loggedInUser.username === username) ? (
              <div className="edit-delete-btn">
                <button onClick={handleLogOut}>Log Out</button>
                <button onClick={()=>setEditProfileBtn(!editProfileBtn)}>Edit Profile</button>
                </div>
              
            ) : (
              <button onClick={() => handleFollowUnfollow(_id)}>
                {followUnfollow.includes(_id) ? "UnFollow" : "Follow"}
              </button>
            )}
          </div>
        </>
      )}
      {(editProfileBtn && (username == loggedInUser.username)) && <EditProfile user = {detail} edit={setEditProfileBtn}/>}
    </div>
  );
}
