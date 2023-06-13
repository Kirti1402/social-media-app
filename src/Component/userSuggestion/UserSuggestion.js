import React, { useContext} from "react";
import { UserContext } from "../../Context/allUser";
import { useNavigate,Link } from "react-router-dom";

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
                <div>
                <Link to={`/profile/${username}`} onClick={()=>getUserData(_id)} >Pic</Link>
                </div>
                <h3>{firstName + " " + lastName}</h3>
                <p>{username}</p>
                <button>Follow</button>
              </div>
            );
          }
        })}
    </div>
  );
}
