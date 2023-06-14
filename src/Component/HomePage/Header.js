import React,{useContext, useEffect} from 'react'
import { UserContext } from '../../Context/allUser';
import { useNavigate ,Link} from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';



export default function Header() {
  const navigate = useNavigate();
  const {userDetailState,getUserData,userId,setUserId} = useContext(UserContext);
  let profile = userDetailState.users.filter(({logged})=> logged===true)
  const {userDataState} = useContext(authContext)

  const userDetail=JSON.parse(localStorage.getItem("User"))

  const getUserDataHandle = (id)=>{
    getUserData(id);
    // setUserId(id);
  }
  

  return (
    <div>Header
      {profile.length>0 && profile.map(({_id,id,firstName,lastName,username})=>{
        return<>
        {/* <div  onClick={()=>handleProfileClick(_id)}>pic</div> */}
        <Link to={`/profile/${username}`} onClick={()=>getUserDataHandle(_id)} >Pic</Link>
        <p>
          {userDetail.firstName + " " + userDetail.lastName + " " + userDetail.username}</p></> 
      })
      }
    </div>
  )
}
