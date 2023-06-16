import React, { useContext, useState } from "react";
import { PostContext } from "../../Context/PostContext";

export default function HomeAllPost() {
  const {
    postState: { allPost },
  } = useContext(PostContext);
  console.log(allPost);
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  return (
    <>
      {allPost.map((post) => {
        const {
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
                <button>like</button>
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
