import React, { useContext} from "react";
import { PostContext } from "../../Context/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart ,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "./Post.css";


export default function UserPost() {
  const loggedInUser = JSON.parse(localStorage.getItem("User"));
  const {
    postState,
    likedPostID,
    setLikesPostID,
    postLikeHandler,
    getUserPost,
    postDisLikeHandler,
    bookmarkedID,
    setBookmarkID,
  } = useContext(PostContext);

  
  let userPost ;
  userPost = postState.post;
  console.log("userpost",userPost)

  const likedDisLikePost = (post, index) => {
    if (!likedPostID.includes(post._id)) {
      postLikeHandler(post._id);
      getUserPost(post.username);
      setLikesPostID([...likedPostID, post._id]);
    } else {
      const updatedArray = likedPostID.filter((id) => id !== post._id);
      setLikesPostID(updatedArray);
      postDisLikeHandler(post._id);
      getUserPost(post.username);
    }
  };
  const bookMarkHadle = (post,index) =>{
    if (!bookmarkedID.includes(post._id)){
      setBookmarkID([...bookmarkedID,post._id]);
      toast.success(`You bookmarked`, {
        autoClose: 1000,
      });
    } else {
      const updatedArray = bookmarkedID.filter((id) => id !== post._id);
      setBookmarkID(updatedArray);
      toast.success(`You removed bookmarked `, {
        autoClose: 1000,
      });
    }
  }



  console.log("userPost",userPost);
  return (
    <>
      {userPost &&
        userPost.map((post, index) => {
          const {
            _id,
            content,
            likes: { likeCount },
            comment,
            media,
            username,
            createdAt,
            firstName,
            lastName,
            avatar,
          } = post;
          // 
          return (
            <div key={_id} className="post-Card">
              <div className="post-user-detail">
                <div>
                {(username  === loggedInUser.username)? <img className="profile-image" src={loggedInUser.avatar} />:<img className="profile-image" src={avatar} />}
             
                </div>
                <div>
                  <p>{firstName + " " + lastName} </p>
                  <p>{username}</p>
                </div>
              </div>
              <div className="post-content">
                {media && <img className="media" src={media} />}
                <p>{content}</p>
              </div>
              <div className="post-btns-container">
                <p>
                  <button
                    onClick={() => likedDisLikePost(post, index)}
                    className="like-btn"
                  >
                   {likedPostID.includes(_id) ? (
                      <FontAwesomeIcon
                        icon={faHeart}
                        style={{ color: "#F38181",height:'20px' }}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} style={{height:'20px' }} />
                    )}
                  </button>
                  {likeCount}
                </p>
                <p>
                  <button  className="bookmark-btn" onClick={()=>bookMarkHadle(post,index)}>{bookmarkedID.includes(_id)?<FontAwesomeIcon icon={faBookmark} style={{ color: "blue" ,height:'20px'}}/>:<FontAwesomeIcon icon={faBookmark} style={{height:'20px'}} />}</button>
                </p>
                <p className="date-formate">{createdAt}</p>
              </div>
              {loggedInUser.username === username && <div className="post-card-menu">
                
               
              </div>}
                  
            </div>
          );
        })}
    </>
  );
}
