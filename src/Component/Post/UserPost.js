import React, { useContext ,useState} from 'react'
import { PostContext } from '../../Context/PostContext'
import { UserContext } from '../../Context/allUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./Post.css"


export default function UserPost() {
  const  {postState,likedPostID,setLikesPostID,postLikeHandler,getUserPost,postDisLikeHandler} = useContext(PostContext)
  const { userDetailState } =
  useContext(UserContext);
  const detail = userDetailState.userData;

  console.log("postState",postState)
  let userPost = postState.post
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const likedDisLikePost = (post,index) =>{

    if (!likedPostID.includes(post._id)){
      postLikeHandler(post._id);
      getUserPost(post.username)
      setLikesPostID([...likedPostID,post._id]);
    } else {
      const updatedArray = likedPostID.filter((id) => id !== post._id);
      setLikesPostID(updatedArray);
      postDisLikeHandler(post._id)
      getUserPost(post.username)
    }
  }

  console.log("userPost",userPost)
  return (
    <>
    {userPost.length>0 && userPost.map((post,index) =>{
      const {_id,content,likes:{likeCount},comment,media,username,createdAt,firstName,lastName,avatar} = post
      return <div key={_id} className='post-Card'>
        <div className='post-user-detail'>
          <div><img className="post-profile-image" src={avatar} alt={username}/></div>
          <div>
          <p>{firstName + " " + lastName} </p>
          <p>{username}</p>
          </div>
         
        </div>
        <div className='post-content'>
          {media && <img className='media' src={media}/>}
        <p>{content}</p>
        </div>
        <div className='post-btns-container'>
          <p><button onClick={() => likedDisLikePost(post,index)} className='like-btn'>{likedPostID.includes(_id)?<FontAwesomeIcon icon={faHeart} style={{ color: '#F38181' }} />:<FontAwesomeIcon icon={faHeart}/> }</button>{likeCount}</p>
        <p><button>Comment</button>:{comment.length}</p>
        <p><button>BookMark</button></p>
        <p className="date-formate">{createdAt}</p>
        </div>
        <div className='post-card-menu'>
        <button onClick={handleClick} className='showBtn'>
        {showOptions ? 'X' : '○○○'}
      </button>
      {showOptions && (
        <div className='options'>
          <button className='showBtn'>Edit</button>
          <button className='showBtn'>Delete</button>
        </div>
      )}
        </div>
        </div>
    })}
    </>
  )
}
