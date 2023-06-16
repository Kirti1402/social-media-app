import React, { useContext, useState } from "react";
import { PostContext } from "../../Context/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function HomeAllPost() {
  const {
    postState: { allPost },
    likedPostID,
    likedDislikePostHandle,
  } = useContext(PostContext);
  const [showOptions, setShowOptions] = useState(false);
  const [isTrending, setIsTrending] = useState(false);
  const [latestPost, setLatestPost] = useState(true);

  // const [allPostData,setAllPostData] = useState([]);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  let allPostData;
  const sortedDataDate =
    allPost.length > 0 &&
    allPost.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const dateFormated =
    sortedDataDate.length > 0 &&
    sortedDataDate.map((obj) => {
      const date = new Date(obj.createdAt);
      const options = { day: "numeric", month: "short", year: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US", options);
      return { ...obj, createdAt: formattedDate };
    });

  allPostData = dateFormated;
  let filteredData;
  filteredData =
    latestPost === true && isTrending === false
      ? allPostData
      : allPostData.sort(
          (a, b) => new Date(b.likes.likeCount) - new Date(a.likes.likeCount)
        );

  const trendingBtnHandle = () => {
    console.log(isTrending, latestPost);
    setIsTrending(true);
    setLatestPost(false);
  };

  const latestBtnHandle = () => {
    console.log(isTrending, latestPost);
    setIsTrending(false);
    setLatestPost(true);
  };

  return (
    <>
      <div>
        <button onClick={trendingBtnHandle}>Trending</button>
        <button onClick={latestBtnHandle}>Latest</button>
      </div>

      {filteredData.length > 0 &&
        filteredData.map((post, index) => {
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
            createdAt,
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
                    onClick={() => likedDislikePostHandle(post, index)}
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
                <p className="date-formate">{createdAt}</p>
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
