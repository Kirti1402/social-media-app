import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { UserContext } from "./allUser";
import {
  followUnfollowUserReducer,
  followUnfollowIntialState,
} from "../Reducer/FollowUnfollowReducer";

export const FollowUnfollowcontext = createContext();

export const FollowUnfollowProvider = ({ children }) => {
  const [followUnfollow, setFollowUnfollow] = useState([]);
  const [userID, setUserID] = useState("");
  const [followUnfollowIntialstate, followUnFollowDispatch] = useReducer(
    followUnfollowUserReducer,
    followUnfollowIntialState
  );
  const { userDetailDispatch } = useContext(UserContext);

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
      console.log("Response", response, user);
      followUnFollowDispatch({
        type: "SET_USER_FOLLOWING",
        payload: response.user,
      });
      followUnFollowDispatch({
        type: "SET_FOLLOWED_USER",
        payload: response.followUser,
      });
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
      console.log("unfollowResponse", response, user);
      
      userDetailDispatch({ type: "SET_USER_DATA", payload: response.user });
    } catch (e) {
      console.log(e);
    }
  };

  //   useEffect(() => {
  //     followHandle(userID)
  //   },[userID])
  return (
    <FollowUnfollowcontext.Provider
      value={{
        followHandle,
        unFollowHandle,
        followUnfollow,
        setFollowUnfollow,
        userID,
        setUserID,
        followUnfollowIntialstate,
      }}
    >
      {children}
    </FollowUnfollowcontext.Provider>
  );
};
