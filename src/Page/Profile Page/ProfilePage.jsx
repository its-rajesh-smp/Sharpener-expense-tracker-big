import React, { useContext, useRef, useState } from "react";
import "./ProfilePage.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import LoginContext from "../../Context/LoginCTX";

function ProfilePage(props) {
  const loginCTX = useContext(LoginContext);
  const history = useHistory();

  const [name, setName] = useState(
    loginCTX.userAuth.displayName !== undefined
      ? loginCTX.userAuth.displayName
      : ""
  );
  const [url, setUrl] = useState(
    loginCTX.userAuth.photoUrl !== undefined ? loginCTX.userAuth.photoUrl : ""
  );
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
        displayName: name,
        photoUrl: url,
      },
      setLoader,
      onCloseBtnHandeler
    );
  };

  return (
    <div className=" ProfilePage-div ">
      <button onClick={onCloseBtnHandeler}>Cancle</button>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Your Name"
        name=""
        id=""
      />
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
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
