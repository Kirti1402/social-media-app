import React, { useContext ,useState} from 'react'
import { PostContext } from '../../Context/PostContext'
import { UserContext } from '../../Context/allUser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./Post.css"


export default function UserPost() {
  const  {postState,likedPostID,setLikesPostID} = useContext(PostContext)
  const { userDetailState } =
  useContext(UserContext);
  const detail = userDetailState.userData;

  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  console.log(postState)
  const likedPost = (post,index) =>{
    if (!likedPostID.includes(post._id)){
      setLikesPostID([...likedPostID,post._id]);
    } else {
      const updatedList = likedPostID
      updatedList.splice(index,1);
      setLikesPostID([updatedList])
    }
  }

  console.log(likedPostID)
  return (
    <>
    {postState.post.map((post,index) =>{
      const {_id,content,likes:{likeCount},comment,media} = post
      return <div className='post-Card'>
        <div className='post-user-detail'>
          <div><img className="post-profile-image" src={detail.avatar}/></div>
          <div>
          <p>{detail.firstName + " " + detail.lastName} </p>
          <p>{detail.username}</p>
          </div>
         
        </div>
        <div className='post-content'>
          {media && <img className='media' src={media}/>}
        <p>{content}</p>
        </div>
        <div className='post-btns-container'>
          <p><button onClick={() => likedPost(post,index)} className='like-btn'>{likedPostID.includes(_id)?<FontAwesomeIcon icon={faHeart} style={{ color: '#F38181' }} />:<FontAwesomeIcon icon={faHeart}/> }</button>{likeCount}</p>
        <p><button>Comment</button>:{comment.length}</p>
        <p><button>BookMark</button></p>
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
