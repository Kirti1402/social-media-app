import { createContext, useContext,useState } from "react";
import { UserContext } from "./allUser";


export const FollowUnfollowcontext = createContext()

export const FollowUnfollowProvider = ({children}) =>{
    const [followUnfollow,setFollowUnfollow] = useState([])
    const {userDetailDispatch} = useContext(UserContext);

    const followHandle = async (userID) => {
        const token = localStorage.getItem("EncodedToken");
        try {
          const user = await fetch(`/api/users/follow/${userID}`, {
            method: "POST",
            headers: {
              authorization: `${token}`,
            },
          });
          const response = await user.json();
          console.log("Response",response,user);
          userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });
        } catch (e) {
          console.log(e);
        }
      };

      const unFollowHandle = async (userID) => {
        const token = localStorage.getItem("EncodedToken");
        try {
          const user = await fetch(`/api/users/unfollow/${userID}`, {
            method: "POST",
            headers: {
              authorization: `${token}`,
            },
          });
          const response = await user.json();
          console.log("Response",response,user);
          userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });
        } catch (e) {
          console.log(e);
        }
      };
    return <FollowUnfollowcontext.Provider value={{followHandle,unFollowHandle,followUnfollow,setFollowUnfollow}}>{children}
    </FollowUnfollowcontext.Provider>
}