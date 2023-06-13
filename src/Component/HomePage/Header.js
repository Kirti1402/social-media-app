import React,{useContext} from 'react'
import { UserContext } from '../../Context/allUser';
import { useNavigate ,Link} from 'react-router-dom';



export default function Header() {
  const navigate = useNavigate();
  const {userDetailState,getUserData} = useContext(UserContext);
  const profile = userDetailState.users.filter(({logged})=> logged===true)

  return (
    <div>Header
      {profile.length>0 && profile.map(({_id,id,firstName,lastName,username})=>{
        return<>
        {/* <div  onClick={()=>handleProfileClick(_id)}>pic</div> */}
        <Link to={`/profile/${username}`} onClick={()=>getUserData(_id)} >Pic</Link>
        <p>
          {firstName + " " + lastName + " " + username}</p></> 
      })
      }
    </div>
  )
}
