import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import useForm from "../hooks/useForm";
import { BASE_URL } from "../constants/url";
import axios from "axios";

export const GlobalStates = (props) => {
  const [posts, setPosts] = useState([]);
  const { form, onChange, cleanForm } = useForm({
    content: "",
  });

  const getPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/posts/`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const addNewPost = async () => {
    try {
      const body = {
        content: form.content,
      };
      const response = await axios.post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      window.localStorage.setItem("token", response.data.output.token);
      getPosts();
      cleanForm();
    } catch (error) {
      console.log(error.response);
    }
  };
  
  useEffect(() => {
    getPosts();
  }, []);
  
  const context = {
    posts,
    setPosts,
    form,
    onChange,
    cleanForm,
    addNewPost
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
