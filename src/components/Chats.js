import React, { useEffect, useState, useContext } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

// Styles
import styles from "./Chats.module.css";

//Components
import Navbar from "./Navbar";

// Context
import { AuthContext } from "../contexts/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  //checking if the user does exist or not. if not this state will take the unregistered user to the login page.
  useEffect(() => {
    if (!user) {
        history.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "8b11f3bd-97eb-45dd-a715-f60bb0a0eca4",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })

      // when the user exists this state will load the user profile information
      .then(() => {
        setLoading(false);
      })

      // when the user doesn't exist this state will create the new user profile based on inserted information
      .catch(() => {
        const formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);
        getAvatar(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);
          axios.post("https://api.chatengine.io/users/", formData, {
            headers: {
                "private-key": "324ec6ee-329a-4222-ad71-945189730230"
            }
          })

          .then(() => setLoading(false))
          .catch(error => console.log(error))
        });
      });
  }, [user, history]);

  // creating avatar-image profile for user
  const getAvatar = async (url) => {
    const responce = await fetch(url);
    const data = await responce.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "Loading...";

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 70px)"
        userName={user.email}
        userSecret={user.uid}
        projectID="8b11f3bd-97eb-45dd-a715-f60bb0a0eca4"
      />
    </div>
  );
};

export default Chats;
