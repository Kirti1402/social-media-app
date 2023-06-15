import React, { useContext ,useState} from 'react'
import { PostContext } from '../../Context/PostContext'
import { UserContext } from '../../Context/allUser'
import "./Post.css"


export default function UserPost() {
  const  {postState} = useContext(PostContext)
  const { userDetailState } =
  useContext(UserContext);
  const detail = userDetailState.userData;

  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  console.log(postState)
  return (
    <>
    <div>UserPost</div>
    {postState.post.map(posts =>{
      const {content,likes:{likeCount},comment,media} = posts
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
          <p><button>like</button>{likeCount}</p>
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
