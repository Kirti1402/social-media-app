import React, { useContext, useState } from "react";
import { PostContext } from "../../Context/PostContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function HomeAllPost() {
  const { postState, likedPostID, setLikesPostID ,postLikeHandler,postDisLikeHandler} = useContext(PostContext);
  const {
    postState: { allPost },
  } = useContext(PostContext);
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const likedPost = (post,index) =>{
    if (!likedPostID.includes(post._id)){
      postLikeHandler(post._id);
      setLikesPostID([...likedPostID,post._id]);
    } else {
      const updatedArray = likedPostID.filter((id) => id !== post._id);
      setLikesPostID(updatedArray);
      postDisLikeHandler(post._id)
    }
  }
  return (
    <>
      {allPost.map((post,index) => {
        const {
          _id,
          content,
          likes: { likeCount },
          comment,
          media,
          firstName,
          lastName,
          avatar,
          username,
        } = post;
        return (
          <div className="post-Card">
            <div className="post-user-detail">
              <div>
                <img className="post-profile-image" src={avatar} />
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
                  onClick={() => likedPost(post, index)}
                  className="like-btn"
                >
                  {likedPostID.includes(_id) ? (
                    <FontAwesomeIcon
                      icon={faHeart}
                      style={{ color: "#F38181" }}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </button>
                {likeCount}
              </p>
              <p>
                <button>Comment</button>:{comment.length}
              </p>
              <p>
                <button>BookMark</button>
              </p>
            </div>
            <div className="post-card-menu">
              <button onClick={handleClick} className="showBtn">
                {showOptions ? "X" : "○○○"}
              </button>
              {showOptions && (
                <div className="options">
                  <button className="showBtn">Edit</button>
                  <button className="showBtn">Delete</button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
