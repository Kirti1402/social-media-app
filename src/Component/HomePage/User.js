import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../../Context/PostContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart ,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "./home.css";
import CreatePost from "../Post/CreatePost";

export default function User() {
  const loggedInUser = JSON.parse(localStorage.getItem("User"));
  const [editDelete,setEditDelete] = useState([]);
  const [editBtn ,setEditBtn] = useState(false);
  const [editAvatar,setEditavatar] = useState("");
  const [editcontent,setEditContent] = useState("");
  const [postID,setPostID] = useState(null);
  const [isTrending, setIsTrending] = useState(false);
  const [latestPost, setLatestPost] = useState(true);
  const {
    postState,
    likedPostID,
    setLikesPostID,
    postLikeHandler,
    getUserPost,
    postDisLikeHandler,
    bookmarkedID,
    setBookmarkID,
    deletePost,
    editPost,
    refreshFlag, setRefreshFlag
  } = useContext(PostContext);
  let userPost ;
  userPost = postState.post;
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (post) => {

    if (!editDelete.includes(post._id)){
      setShowOptions(true);
      setEditDelete([...editDelete,post._id]);
    } else {
      setShowOptions(false);
      const updatedArray = editDelete.filter((id) => id !== post._id);
      setEditDelete(updatedArray);
    }

  };
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
  const onclickEditHandle = (post) =>{
    setEditBtn(true)
    setEditavatar(post.avatar)
    setEditContent(post.content)
    setPostID(post._id);
  }
  let allPostData;
  const sortedDataDate =
  userPost &&
  userPost.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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

  const onClickUpdate = () =>{
    editPost(postID,{content:editcontent});
    setEditBtn(false);
  }

  const trendingBtnHandle = () => {
    setIsTrending(true);
    setLatestPost(false);
  };

  const latestBtnHandle = () => {
    setIsTrending(false);
    setLatestPost(true);
  };
  useEffect(() => {
    if (refreshFlag) {
      setRefreshFlag(false);
    }
  }, [refreshFlag]);

  return (
    <>
    {refreshFlag ? 
  <div>Loading...</div> // or any loading indicator
 : <><div className="filtered-container">
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
        comment,
        media,
        username,
        createdAt,
        firstName,
        lastName,
        avatar,
      } = post;
      return (
        <div key={_id} className="post-Card">
          <div className="post-user-detail">
            <div>
              <img
                className="post-profile-image"
                src={avatar}
                alt={username}
              />
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
            
            <button onClick={()=>handleClick(post)} className="showBtn">
              {(showOptions && editDelete.includes(_id)) ? "X" : "○○○"}
            </button>
            {(showOptions && editDelete.includes(_id)) && (
              <div className="options">
                <button className="showBtn edit" onClick={()=>onclickEditHandle(post)}>Edit</button>
                {
                (editBtn) &&  <div className="post-user-detail-edit">
                  <div className="editPost-content">
                <img
                className="post-profile-image"
                src={editAvatar}
                alt="image"
              />
                <textarea className='edit-textarea'
                  value={editcontent}
                  onChange={(e) => setEditContent(e.target.value)}
                />
                </div>
                <div>
                <button className="update-btn" onClick={onClickUpdate}>Update</button>
                </div>
              </div>
              }
                <button className="showBtn delete" onClick={()=>deletePost(_id)}>Delete</button>
              </div>
            )}
          </div>}
              
        </div>
      );
    })}</>}
    
    </>
  );
}
