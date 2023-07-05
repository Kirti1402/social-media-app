import React from "react";
import { UserContext } from "../../Context/allUser";
import { useContext, useState } from "react";

export default function EditProfile({ user }) {
  const [editBio,setEditBio] = useState("");
  const [editLink,setEditLink] = useState("");
  const { editUser,editProfileBtn,setEditProfileBtn } = useContext(UserContext);

  const onclickUpdate = ()=>{
    editUser({editBio,editLink})
    setEditProfileBtn(!editProfileBtn)
  }
  console.log(user,setEditProfileBtn);
  return (
    <div className="edit-user">
      <div>
        <label className="edit-input">
          <span>BIO:</span>
          <input className="inputfield" name="bio" onChange={(e) => setEditBio(e.target.value)} />
        </label>
      </div>
      <div >
        <label className="edit-input">
          <span>LINK:</span>
          <input  name="link" className="inputfield"  onChange={(e) => setEditLink(e.target.value)} />
        </label>
      </div>
      <button className="update-btn" onClick={onclickUpdate}>Update</button>
    </div>
  );
}
