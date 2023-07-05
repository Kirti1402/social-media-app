import React, { useContext, useState } from "react";
import { PostContext } from "../../Context/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart ,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import CreatePost from "./CreatePost";

export default function HomeAllPost() {
  const {
    postState: { allPost },
    likedPostID,
    likedDislikePostHandle,
    bookmarkedID,
    setBookmarkID,
    postBookMarkHandler,
    postBookMarRemovekHandler,
  } = useContext(PostContext);
  const [isTrending, setIsTrending] = useState(false);
  const [latestPost, setLatestPost] = useState(true);

  let allPostData;
  const sortedDataDate =
    allPost &&
    allPost.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  const dateFormated =
    sortedDataDate &&
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
    setIsTrending(true);
    setLatestPost(false);
  };

  const latestBtnHandle = () => {
    setIsTrending(false);
    setLatestPost(true);
  };

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
      <div>
        <CreatePost/>
      </div>
      {filteredData &&
        filteredData.map((post, index) => {
          const {
            _id,
            content,
            likes: { likeCount },
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
                {avatar? <img className="profile-image" src={avatar} />: <img className="profile-image" src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg" />}
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
                  <button  className="bookmark-btn" onClick={()=>bookMarkHadle(post,index)}>{bookmarkedID.includes(_id)?<FontAwesomeIcon icon={faBookmark} style={{ color: "blue" ,height:'20px'}}/>:<FontAwesomeIcon icon={faBookmark} style={{height:'20px'}} />}</button>
                </p>
                <p className="date-formate">{createdAt}</p>
              
             </div>
            </div>
          );
        })}
    </>
  );
}
