import React, { useContext, useState } from "react";
import { PostContext } from "../../Context/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart ,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/allUser";

export default function HomeAllPost() {
  const navigate= useNavigate();
  const {getUserData} = useContext(UserContext);
  const {
    postState: { allPost },
    likedPostID,
    likedDislikePostHandle,
    getUserPost,
    bookmarkedID,
    setBookmarkID,
    postBookMarkHandler,
    postBookMarRemovekHandler
  } = useContext(PostContext);
  const [showOptions, setShowOptions] = useState(false);
  const [isTrending, setIsTrending] = useState(false);
  const [latestPost, setLatestPost] = useState(true);
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

  const handleProfileClick = (id,username) =>{
    console.log("id",id,"username",username)
    getUserData(id)
    getUserPost(username);
  }
  const bookMarkHadle = (post,index) =>{
    if (!bookmarkedID.includes(post._id)){
      postBookMarkHandler(post._id);
      setBookmarkID([...bookmarkedID,post._id]);
      toast.success(`You bookmarked`, {
        autoClose: 1000,
      });
    } else {
      const updatedArray = bookmarkedID.filter((id) => id !== post._id);
      setBookmarkID(updatedArray);
      postBookMarRemovekHandler(post._id)
      toast.success(`You removed bookmarked `, {
        autoClose: 1000,
      });
    }
  }
  return (
    <>
      <div className="filtered-container">
        <button className="filter-btn" onClick={trendingBtnHandle}>Trending</button>
        <button className="filter-btn" onClick={latestBtnHandle}>Latest</button>
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
                <div >
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
                        style={{ color: "#F38181",height:'20px' }}
                      />
                    ) : (
                      <FontAwesomeIcon icon={faHeart} style={{height:'20px' }} />
                    )}
                  </button>
                  {likeCount}
                </p>
                <p>
                  <button>Comment</button>:{comment.length}
                </p>
                <p>
                  <button  className="bookmark-btn" onClick={()=>bookMarkHadle(post,index)}>{bookmarkedID.includes(_id)?<FontAwesomeIcon icon={faBookmark} style={{ color: "blue" ,height:'20px'}}/>:<FontAwesomeIcon icon={faBookmark} style={{height:'20px'}} />}</button>
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
