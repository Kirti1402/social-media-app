import React,{useContext} from 'react'
import { UserContext } from '../../Context/allUser';


export default function Header() {
  const {suggestionState} = useContext(UserContext);
  const profile = suggestionState.users.filter(({logged})=> logged===true)
  console.log(profile)
  return (
    <div>Header
      {profile.length>=0 && profile.map(({firstName,lastName,username})=>{
        return <p>{firstName + " " + lastName + " " + username}</p>
      })
      }
    </div>
  )
}
