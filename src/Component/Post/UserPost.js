import React, { useContext } from 'react'
import { PostContext } from '../../Context/PostContext'
import "./Post.css"

export default function UserPost() {
  const  {postState} = useContext(PostContext)
  console.log(postState)
  return (
    <>
    <div>UserPost</div>
    {postState.post.map(posts =>{
      const {content,likes:{likeCount},comment,media} = posts
      return <div className='post-Card'>
        <div className='post-content'>
          {media && <img className='media' src={media}/>}
        <p>{content}</p>
        </div>
        <div className='post-btns-container'>
          <p><button>Like</button>{likeCount}</p>
        <p><button>Comment</button>:{comment.length}</p>
        <p><button>BookMark</button></p>
        </div>
        

      </div>
    })}
    </>
  )
}
