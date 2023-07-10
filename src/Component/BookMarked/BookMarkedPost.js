import React from 'react'
import { PostContext } from '../../Context/PostContext';
import { useContext ,useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";


export default function BookMarkedPost() {
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
  const bookMarkedPost = allPost.filter(({_id})=>{
    return bookmarkedID.includes(_id);
  })

  const handleClick = () => {
    setShowOptions(!showOptions);
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
    }
  }

  return (
    <>
      {
        bookMarkedPost ?
        bookMarkedPost.map((post,index) => {
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
                {avatar? <img className="post-profile-image" src={avatar} />: <img className="post-profile-image" src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg" />}
             
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
              </div>
            </div>
          );
        }) : <p className='no-bookmarked-post'>No bookMark</p>
      }
    </>
  )
}
