import { useParams } from "react-router-dom";
import Post from "../../components/Posts/Post"; // Importe o componente Post
import { ColoredLine } from "../Posts/PostsPageStyle";
import {
  ContainerCommentsPage,
  ContainerComment,
  ButtonPost,
} from "./CommentsPageStyle";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import Comment from "../../components/Comments/Comment";
import useForm from "../../hooks/useForm";

export default function CommentsPage() {
  useProtectedPage();
  const { id } = useParams();
  const [comment, setComment] = useState([]);
  const [posts, setPost] = useState([]);
  const { form, onChange, cleanForm } = useForm({
    content: "",
  });

  const getPostById = posts.find((post) => post.id === id);

  const getComment = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments/${id}/post`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      setComment(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

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

  const addNewComment = async () => {
    try {
      const body = {
        content: form.content,
      };
      const response = await axios.post(
        `${BASE_URL}/comments/${id}/post`,
        body,
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      window.localStorage.setItem("token", response.data.output.token);
      getComment();
      cleanForm();
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getComment();
    getPosts();
  }, []);

  return (
    <ContainerCommentsPage>
      <Post postagens={getPostById} />
      <ContainerComment>
        <div className="ContainerComment">
        <input
          type="text"
          placeholder="Escreva seu post..."
          name="content"
          value={form.content}
          onChange={onChange}
        />
        </div>
        <ButtonPost onClick={addNewComment}>Responder</ButtonPost>
      </ContainerComment>
      <ColoredLine />
      {comment.map((commentItem, index) => (
        <Comment key={index} comentarios={commentItem} />
      ))}
    </ContainerCommentsPage>
  );
}
