import { createContext, useReducer } from "react";
import { postIntialState,postUserReducer } from "../Reducer/PostReducer";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

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
  return <PostContext.Provider value={{getUserPost,postState}}>{children}</PostContext.Provider>;
};
