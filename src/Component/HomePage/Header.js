import React,{useContext} from 'react'
import { UserContext } from '../../Context/allUser';
import { useNavigate } from 'react-router-dom';



export default function Header() {
  const navigate = useNavigate();
  const {userDetailState,getUserData} = useContext(UserContext);
  const profile = userDetailState.users.filter(({logged})=> logged===true)
  console.log(profile)

  const handleProfileClick = (id) =>{
    getUserData(id);
    navigate("/profile")

  }
  return (
    <div>Header
      {profile.length>=0 && profile.map(({_id,id,firstName,lastName,username})=>{
        return<>
        <div  onClick={()=>handleProfileClick(_id)}>pic</div>
        <p>
          {firstName + " " + lastName + " " + username}</p></> 
      })
      }
    </div>
  )
}
