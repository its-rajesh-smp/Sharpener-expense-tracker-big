import React, { useContext, useRef, useState } from "react";
import "./ProfilePage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import LoginContext from "../../Context/LoginCTX";

function ProfilePage(props) {
  const loginCTX = useContext(LoginContext);
  const history = useHistory();
  const nameRef = useRef();
  const imageRef = useRef();
  const [loader, setLoader] = useState(false);
  /* -------------------------------------------------------------------------- */
  /*                                   GO BACK                                  */
  /* -------------------------------------------------------------------------- */
  const onCloseBtnHandeler = () => {
    history.replace("/");
  };

  /* -------------------------------------------------------------------------- */
  /*                                  BTN SAVE                                  */
  /* -------------------------------------------------------------------------- */
  const onBtnSaveHandeler = () => {
    setLoader(true);
    loginCTX.updateUserProfile(
      {
        displayName: nameRef.current.value,
        photoUrl: imageRef.current.value,
      },
      setLoader
    );
  };

  return (
    <div className=" ProfilePage-div ">
      <button onClick={onCloseBtnHandeler}>Cancle</button>
      <input ref={nameRef} type="text" placeholder="Your Name" name="" id="" />
      <input
        ref={imageRef}
        type="text"
        placeholder="Photo URL "
        name=""
        id=""
      />

      {!loader ? (
        <button onClick={onBtnSaveHandeler}>Save</button>
      ) : (
        <h1>LOADING...</h1>
      )}
    </div>
  );
}

export default ProfilePage;
