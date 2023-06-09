import React, { useContext, useState } from 'react'
import { PostContext } from '../../Context/PostContext';

export default function CreatePost() {
  const [disabled,setDisabled] = useState(true);
  const {
    postState,
    postDispatch,
    createPost
  } = useContext(PostContext);
  const Getuser = JSON.parse(localStorage.getItem("User"));

  const postContentHandle = (value)=>{
    if(value.length == 0){
      setDisabled(true)
    }else{
      setDisabled(false)
    }
   
    let post = postState.createPost;
    post = {...post, content:value,firstName:Getuser.firstName,lastName:Getuser.lastName,username:Getuser.username}
    postDispatch({ type: "SET_CONTENT", payload: post });
  }


  const onClickPost = () =>{
    if(postState.createPost){
      createPost(postState.createPost);
    }

    let post = postState.createPost;
    post = {...post, content:""}
    postDispatch({ type: "SET_CONTENT", payload: post });
    setDisabled(true);
  }
  return (
    <div>
<div className="create-post-Card">
              
              <div className="post-user-detail">
                <div >
                  {Getuser.avatar ? <img className="post-profile-image" src={Getuser.avatar} /> :<img className="post-profile-image" src="https://img.freepik.com/free-photo/3d-rendering-zoom-call-avatar_23-2149556777.jpg" />}      
                </div>
                <div>
                  <p>{Getuser.firstName + " " + Getuser.lastName} </p>
                  <p>{Getuser.username}</p>
                </div>
              </div>
              <div className="post-content">
                <textarea className='textarea' value={postState.createPost.content} placeholder="What is happening???" onChange={(e)=> postContentHandle(e.target.value)}></textarea>
              </div>
              <div className="post-btns-container">
                <button onClick={onClickPost} disabled={disabled}>Post</button>
              </div>
            </div>
    </div>
  )
}
