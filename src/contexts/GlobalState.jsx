// GlobalStates.js
import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useForm from "../hooks/useForm";

export const GlobalStates = (props) => {
  const [posts, setPosts] = useState([]);
  const { form, onChange, cleanForm } = useForm({
    content: "",
  });

  const updateLikes = (postId, newLikes) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: newLikes };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const context = {
    posts,
    setPosts,
    form,
    onChange,
    cleanForm,
    updateLikes
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
