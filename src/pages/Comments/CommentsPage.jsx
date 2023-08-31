import Post from "../../components/Posts/Post";
import { ColoredLine } from "../Posts/PostsPageStyle";
import {
  ContainerCommentsPage,
  ContainerComment,
  ButtonPost,
} from "./CommentsPageStyle";
import useProtectedPage from "../../hooks/useProtectedPage";
import Comment from "../../components/Comments/Comment";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export default function CommentsPage() {
  useProtectedPage();
  const { id } = useParams();
  const [comment, setComment] = useState([]);
  const { form, onChange, cleanForm, posts } = useContext(GlobalContext);

  const getPostById = posts.find((post) => post.id === id);

  const getComment = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/comments/${id}/post`, {
        headers: {
          Authorization: window.localStorage.getItem("token"),
        },
      });
      console.log(response.data);
      setComment(response.data);
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
  }, []);

  return (
    <ContainerCommentsPage>
      <Post postagens={getPostById} />
      <ContainerComment>
        <div className="ContainerComment">
          <textarea
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
      {comment.map((commentItem, index) => {
        return <Comment key={index} comentarios={commentItem} />;
      })}
    </ContainerCommentsPage>
  );
}
