import { createContext, useReducer, useEffect ,useState} from "react";
import { postIntialState,postUserReducer } from "../Reducer/PostReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [likedPostID,setLikesPostID] = useState([])
  const [postState,postDispatch] = useReducer(postUserReducer, postIntialState);

    const getUserPost = async (username) => {
        console.log("Post context")
        try {
          const user = await fetch(`/api/posts/user/${username}`, {
            method: "GET",
          });
          const response = await user.json();
          console.log("Post",response.posts);
          postDispatch({type:"SET_POST",payload:response.posts})
        } catch (e) {
          console.log(e);
        }
      };
      const getAllPost = async () => {
        try {
          const user = await fetch(`/api/posts`, {
            method: "GET",
          });
          const response = await user.json();
          console.log("ALLPost",response.posts);
          postDispatch({type:"SET_ALL_POST",payload:response.posts})
        } catch (e) {
          console.log(e);
        }
      };
  useEffect(()=>{
    getAllPost();
  },[])


  return <PostContext.Provider value={{getUserPost,postState,likedPostID,setLikesPostID}}>{children}</PostContext.Provider>;
};
