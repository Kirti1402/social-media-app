import { createContext, useReducer, useEffect ,useState} from "react";
import { postIntialState,postUserReducer } from "../Reducer/PostReducer";
import { toast } from "react-toastify";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const token = localStorage.getItem("EncodedToken")
  const [likedPostID,setLikesPostID] = useState([])
  const [postState,postDispatch] = useReducer(postUserReducer, postIntialState);

    const getUserPost = async (username) => {
        try {
          const user = await fetch(`/api/posts/user/${username}`, {
            method: "GET",
          });
          const response = await user.json();
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
          postDispatch({type:"SET_ALL_POST",payload:response.posts})
        } catch (e) {
          console.log(e);
        }
      };

      const postLikeHandler = async (postID) => {
        try{
          const user = await fetch(`/api/posts/like/${postID}`, {
            method: "POST",
            headers: {
              authorization: `${token}`,
            },
          });
          const response = await user.json();
          postDispatch({type:"SET_ALL_POST",payload:response.posts})
        }catch(e){
          console.log(e)
        }
      }
      const postDisLikeHandler = async (postID) => {
        
        try{
          const user = await fetch(`/api/posts/dislike/${postID}`, {
            method: "POST",
            headers: {
              authorization: `${token}`,
            },
          });
          const response = await user.json();
          postDispatch({type:"SET_ALL_POST",payload:response.posts})
        }catch(e){
          console.log(e)
        }
      }

      const likedDislikePostHandle = (post,index) =>{
        if (!likedPostID.includes(post._id)){
          postLikeHandler(post._id);
          setLikesPostID([...likedPostID,post._id]);
          toast.success(`You liked post of ${post.username}`, {
            autoClose: 1000,
          });
        } else {
          const updatedArray = likedPostID.filter((id) => id !== post._id);
          setLikesPostID(updatedArray);
          postDisLikeHandler(post._id)
          toast.success(`You disliked post of ${post.username}`, {
            autoClose: 1000,
          });
        }
      }
  useEffect(()=>{
    getAllPost();
  },[])


  return <PostContext.Provider value={{getUserPost,postState,likedPostID,setLikesPostID,postLikeHandler,postDisLikeHandler,likedDislikePostHandle}}>{children}</PostContext.Provider>;
};
