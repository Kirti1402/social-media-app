import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/allUser";
import { FollowUnfollowcontext } from "../../Context/FollowUnFollowContext";
import { PostContext } from "../../Context/PostContext";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileCard() {
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const navigate = useNavigate()
  const loggedInUser = JSON.parse(localStorage.getItem("User"));
  const {
    userDetailState,
    getUserData,
  } = useContext(UserContext);
  const {
    followHandle,
    unFollowHandle,
    followUnfollow,
    setFollowUnfollow,
  } = useContext(FollowUnfollowcontext);
  const {getUserPost} = useContext(PostContext);
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
    navigate("/")
    
  }

  return (
    <div>
      {detail && firstName && lastName && (
        <>
          <div className="avatar-user-detail">
            {backgroundImage ? <img className="background-image" src={backgroundImage} /> :<img className="background-image" src="https://img.freepik.com/free-psd/travel-sales-background_23-2150350125.jpg" />}
            <div className="user-desc">
              {avatar? <img className="profile-image" src={avatar} />: <img className="profile-image" src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg" />}
              <div className="username-desc">
                <p style={{fontWeight:'700',fontSize:'18px'}}>{firstName + " " + lastName} </p>
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
              <button onClick={handleLogOut}>Log Out</button>
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
