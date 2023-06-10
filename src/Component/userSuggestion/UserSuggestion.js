import React, { useContext} from "react";
import { UserContext } from "../../Context/allUser";

export default function UserSuggestion() {
const {state} = useContext(UserContext);
  return (
    <div>
      ProfileSuggestion
      {state.users.length > 0 &&
        state.users.map(({ firstName, lastName, username, logged }) => {
          if (!logged) {
            return (
              <div>
                <h3>{firstName + " " + lastName}</h3>
                <p>{username}</p>
              </div>
            );
          }
        })}
    </div>
  );
}
