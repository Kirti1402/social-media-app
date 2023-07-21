import React from "react";
import { UserContext } from "../../Context/allUser";
import { useContext, useState } from "react";
import Select from 'react-select';
import av1 from "../../Assets/av1.png";
import av2 from "../../Assets/av2.png";
import av3 from "../../Assets/av3.png";
import av4 from "../../Assets/av4.png";
import { PostContext } from "../../Context/PostContext";

export default function EditProfile({ user }) {
  const {
    getUserPost,getAllPost
  } = useContext(PostContext);
  const [bio,setEditBio] = useState(user.bio);
  const [link,setEditLink] = useState(user.link);
  const [avatar, setSelectedAvatar] = useState(user.avatar);
  const [editAvatar,setEditBioAvatar] = useState(false);
  const { editUser,editProfileBtn,setEditProfileBtn,getAllUsers } = useContext(UserContext);
console.log("userin edit",user)
  const avatarOptions = [
    { value: 'https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg', label: 'Cool' },
    { value: av2, label: 'Cry' },
    { value: av3, label: 'Fun' },
    { value: av4, label: 'Scream' },
  ];
  const onclickUpdate = ()=>{
    console.log("selectedAvatar",avatar);
    
    editUser({bio,link,avatar: avatar.value},user._id,user.username)
    setEditProfileBtn(!editProfileBtn)
    getUserPost(user.username);
    getAllPost();
    
  }

  const handleAvatarChange = (selectedOption) => {
    setSelectedAvatar(selectedOption);
  };
  return (
    <div className="edit-user">
      <div>
        <label className="edit-input">
          <span>BIO:</span>
          <input type="text"className="inputfield" value={bio} name="bio" onChange={(e) => setEditBio(e.target.value)} />
        </label>
      </div>
      <div >
        <label className="edit-input">
          <span>LINK:</span>
          <input type="text"  name="link" value={link} className="inputfield"  onChange={(e) => setEditLink(e.target.value)} />
        </label>
      </div>
      <div>
       <button onClick={()=>setEditBioAvatar(!editAvatar)}>Edit Avatar</button>
       {editAvatar && <Select
        value={avatar}
        onChange={handleAvatarChange}
        options={avatarOptions}
        isClearable
        getOptionLabel={(option) => (
          <>
            <img src={option.value} alt={option.label} width="30" height="30" />{' '}
            {option.label}
          </>
        )}
        getOptionValue={(option) => option.value}
      />}
       
      </div>
      <button className="update-btn-profile" onClick={onclickUpdate}>Update</button>
      <button className="update-btn-profile" onClick={()=>setEditProfileBtn(!editProfileBtn)}>Cancel</button>
    </div>
  );
}
