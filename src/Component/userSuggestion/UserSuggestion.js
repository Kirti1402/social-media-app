import React, { useContext} from "react";
import { UserContext } from "../../Context/allUser";

export default function UserSuggestion() {
const {suggestionState} = useContext(UserContext);
console.log(suggestionState)
  return (
    <div>
      ProfileSuggestion
      {suggestionState.users.length > 0 &&
        suggestionState.users.map(({id, firstName, lastName, username, logged }) => {
          if (!logged) {
            return (
              <div key={id}>
                <h3>{firstName + " " + lastName}</h3>
                <p>{username}</p>
              </div>
            );
          }
        })}
    </div>
  );
}
