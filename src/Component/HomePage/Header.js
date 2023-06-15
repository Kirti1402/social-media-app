import React,{useContext, useEffect} from 'react'
import { UserContext } from '../../Context/allUser';
import { useNavigate ,Link} from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';
import { PostContext } from '../../Context/PostContext';



export default function Header() {
  
  const navigate = useNavigate();
  const {getUserPost} = useContext(PostContext)
  const {userDetailState,getUserData,userId,setUserId} = useContext(UserContext);
  let profile = userDetailState.users.filter(({logged})=> logged===true)
  const {userDataState,userDataDispatch} = useContext(authContext)

  const userDetail=JSON.parse(localStorage.getItem("User"))

  const getUserDataHandle = (id,username)=>{
    console.log("profile",profile)
    console.log("login",userDetail)
    getUserData(id);
    getUserPost(username);
    // setUserId(id);
  }
  
  const profileUser = JSON.parse(localStorage.getItem("User"))

  

  // useEffect(()=>{
  //   userDataDispatch({ type: "SET_USER", payload: profileUser })
  // },[])
  
  console.log(userDataState)

  return (
    <div>Header
        <Link to="/">Home</Link>
        {
          (profileUser && profileUser.username) && <div>
            <Link to={`/profile/${profileUser.username}`} onClick={()=>getUserDataHandle(profileUser._id,profileUser.username)} >Pic</Link>
            <p>
          {profileUser.firstName + " " + profileUser.lastName + " " + profileUser.username}</p>
          </div>
        }
      {/* {profile.length>0 && profile.map(({_id,id,firstName,lastName,username})=>{
        return<>
        <Link to={`/profile/${username}`} onClick={()=>getUserDataHandle(_id,username)} >Pic</Link>
        <p>
          {firstName + " " + lastName + " " + username}</p></> 
      })
      } */}
      
      
    </div>
  )
}
