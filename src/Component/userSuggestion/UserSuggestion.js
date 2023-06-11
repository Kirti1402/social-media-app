import React, { useContext} from "react";
import { UserContext } from "../../Context/allUser";
import { useNavigate } from "react-router-dom";

export default function UserSuggestion() {
  const navigate = useNavigate();
const {userDetailState,getUserData} = useContext(UserContext);

const handleProfileClick = (id) =>{
  getUserData(id);
  navigate("/profile")
}
  return (
    <div>
      ProfileSuggestion
      {userDetailState.users.length > 0 &&
        userDetailState.users.map(({_id,id, firstName, lastName, username, logged }) => {
          if (!logged) {
            return (
              <div key={id}>
                <div onClick={()=>handleProfileClick(_id)}>pic</div>
                <h3>{firstName + " " + lastName}</h3>
                <p>{username}</p>
              </div>
            );
          }
        })}
    </div>
  );
}
