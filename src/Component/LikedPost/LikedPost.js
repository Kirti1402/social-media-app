import React, { useContext,useState } from 'react'
import { PostContext } from '../../Context/PostContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart ,faBookmark} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";


export default function LikedPost() {
    const { postState, likedPostID,likedDislikePostHandle,bookmarkedID,
      setBookmarkID} = useContext(PostContext);
    const allpost = postState.allPost;
    const likedPost = allpost && allpost.filter((post)=>{
        return likedPostID.includes(post._id)
    })

    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
      setShowOptions(!showOptions);
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
      }
    }
    const loggedInUser = JSON.parse(localStorage.getItem("User"));
  return (
    <>
    {likedPost ? 
    
    likedPost.map((post,index) => {
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
              {username === loggedInUser.username? <img className="profile-image" src={loggedInUser.avatar} />: <img className="profile-image" src={avatar} />}
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
      })
     :<p className='nolikedpost-text'>You didnt liked any post</p>}
    </>
  )
}
