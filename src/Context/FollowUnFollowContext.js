import {
  createContext,
  useContext,
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
  const {userDetailDispatch,userDetailState,loggedIn,setLoggedIn} = useContext(UserContext);

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
      followUnFollowDispatch({
        type: "SET_USER_FOLLOWING",
        payload: response.user,
      });
      followUnFollowDispatch({
        type: "SET_FOLLOWED_USER",
        payload: response.followUser,
      });
      console.log( "responsehandleuser",response)
      const userDetail = JSON.parse(localStorage.getItem("userDetail"))
      const loggedInUser = JSON.parse(localStorage.getItem("User"))
      console.log("userIdPassed",userID,"userDetailonPage",userDetail,"LoggedInUserDetail",loggedInUser)
      if(userID === userDetail._id && userID !== loggedInUser._id ){
        console.log("userIdmatched")
        userDetailDispatch({ type: "SET_USER_DATA", payload: response.followUser })
      }else if(userID !== loggedInUser._id && userDetail._id === loggedInUser._id){

        userDetailDispatch({ type: "SET_USER_DATA", payload: response.user })
        
      }

      userUpdate( response.user)
      
      
      setLoggedIn(!loggedIn)
      // userDetailDispatch({ type: "SET_USER_DATA", payload: response.followUser });
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
      followUnFollowDispatch({
        type: "SET_USER_FOLLOWING",
        payload: response.user,
      });
      followUnFollowDispatch({
        type: "SET_FOLLOWED_USER",
        payload: response.followUser,
      });


      userUpdate( response.user)
      const userDetail = JSON.parse(localStorage.getItem("userDetail"))
      const loggedInUser = JSON.parse(localStorage.getItem("User"))
      console.log(userID,userDetail,loggedInUser)
      if(userID === userDetail._id && userID !== loggedInUser._id ){
        console.log("userIdmatched")
        userDetailDispatch({ type: "SET_USER_DATA", payload: response.followUser })
      }else if(userID !== userDetail._id && userID !== loggedInUser._id){
        userDetailDispatch({ type: "SET_USER_DATA", payload: response.user })
      }

    } catch (e) {
      console.log(e);
    }
  };
  const userUpdate = async (data) => {
    const token = localStorage.getItem("EncodedToken");
    try {
      const user = await fetch(`/api/users/edit`, {
        method: "POST",
        headers: {
          authorization: `${token}`,
        },
        body: JSON.stringify(data)
      });
      const response = await user.json();

      let updatedArray = userDetailState.users.map(item =>{
        if(item._id === response.user._id) {
          return {...item,...response.user}
        }
        return item;
            })
      console.log("updated",response)
      localStorage.setItem("User",JSON.stringify(response.user));
      userDetailDispatch({ type: "SET_USERS", payload: updatedArray });
      // localStorage.setItem("UserProfileDetail",response.followUser)
      // userDetailDispatch({ type: "SET_USER_DATA", payload: response.followUser });
    } catch (e) {
      console.log(e);
    }
  };



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
