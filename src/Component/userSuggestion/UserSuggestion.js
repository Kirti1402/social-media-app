import React, { useContext} from "react";
import { UserContext } from "../../Context/allUser";
import { useNavigate,Link } from "react-router-dom";
import { FollowUnfollowcontext } from "../../Context/FollowUnFollowContext";
import { PostContext } from "../../Context/PostContext";
import "./userSuggestion.css"


export default function UserSuggestion() {
  const {getUserPost} = useContext(PostContext);
  const navigate = useNavigate();
const {userDetailState,getUserData,userDetailDispatch} = useContext(UserContext);
const {followHandle,followUnfollow,setFollowUnfollow} = useContext(FollowUnfollowcontext)

const handleProfileClick = (user,index) =>{
  followHandle(user._id);
  setFollowUnfollow([...followUnfollow,user._id]);
  
}

const handleAvatarClick = (id,username) =>{
  getUserData(id)
  getUserPost(username);
}


  return (
    <div className="suggestion-container">
      <h3 style={{textAlign:'center',marginBottom:'10px'}}>ProfileSuggestion</h3>
      {userDetailState.users.length > 0 &&
       userDetailState.users.map((user,index) => {
        const {_id,id, firstName, lastName, username, logged,avatar } = user
        if (!logged && !followUnfollow.includes(_id)) {
          return (
            <div className="user-suggestion-container" key={id}>
              <div>
              <Link to={`/profile/${username}`} onClick={()=>handleAvatarClick(_id,username)} ><img className="user-profile-image"  src={avatar}/></Link>
              </div>
              <div className="user-data">
              <h3>{firstName + " " + lastName}</h3>
              <p>{username}</p>
              <button className="follow-btn" onClick={()=>handleProfileClick(user,index)}>Follow</button>
              </div>

            </div>
          );
        }
      }) 
       }
    </div>
  );
}
