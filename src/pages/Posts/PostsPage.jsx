// PostsPage.js
import { useContext, useEffect } from "react";
import Post from "../../components/Posts/Post";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  ButtonPost,
  ContainerPost,
  ContainerPostPage,
  ColoredLine,
} from "./PostsPageStyle";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export default function PostsPage() {
  useProtectedPage();
  const { form, onChange, posts, setPosts, cleanForm } = useContext(GlobalContext);

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

  return (
    <ContainerPostPage>
      <ContainerPost>
        <div className="inputForm">
          <textarea
            placeholder="Escreva seu post..."
            name="content"
            value={form.content}
            onChange={onChange}
          />
        </div>
        <ButtonPost onClick={addNewPost}>Postar</ButtonPost>
      </ContainerPost>
      <ColoredLine />
      {posts.map((postItem, index) => {
        return (
          <Post
            key={index}
            postagens={postItem}
          />
        );
      })}
    </ContainerPostPage>
  );
}
