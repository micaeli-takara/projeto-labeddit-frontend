import { useEffect, useState } from "react";
import Post from "../../components/Posts/Post";
import useProtectedPage from "../../hooks/useProtectedPage";
import {
  ButtonPost,
  ContainerPost,
  ContainerPostPage,
  ColoredLine,
} from "./PostsPageStyle";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";

export default function PostsPage() {
  useProtectedPage();
  const [post, setPost] = useState([]);
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
      setPost(response.data);
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
          <input
            type="text"
            placeholder="Escreva seu post..."
            name="content"
            value={form.content}
            onChange={onChange}
          />
        </div>
        <ButtonPost onClick={addNewPost}>Postar</ButtonPost>
      </ContainerPost>
      <ColoredLine />
      {post.map((postItem, index) => (
        <Post 
            key={index} 
            postagens={postItem} 
        />
      ))}
    </ContainerPostPage>
  );
}
