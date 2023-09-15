import { useContext, useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";
import Post from "../../components/Post/Post";
import Comment from "../../components/Comment/Comment";
import {
    ContainerCommentsPage,
    ContainerComment,
    ButtonPost,
} from "./CommentsStyle";
import { ColoredLine } from "../PostsPage/PostsStyle";

export default function CommentsPage() {
    useProtectedPage();
    const { id } = useParams();
    const { posts, getPosts } = useContext(GlobalContext);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState(null);
    const [remainingChars, setRemainingChars] = useState(480);
    const { form, onChange, cleanForm } = useForm({ content: "" });

    const getPostById = posts.find((post) => post.id === id);

    useEffect(() => {
        getComments();
        getPosts();
    }, []);

    useEffect(() => {
        const remaining = 480 - form.content.length;
        setRemainingChars(remaining);
    }, [form.content]);

    const addNewComment = async () => {
        if (remainingChars < 0) {
            alert("Limite de caracteres excedido");
            return;
        }
        try {
            const body = {
                content: form.content,
            };
            await axios.post(`${BASE_URL}/comments/${id}/post`, body, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                },
            });
            cleanForm();
            getComments();
        } catch (error) {
            setError(error);
            console.error(error.response?.data || "Erro desconhecido");
        }
    };

    const handleDeleteComment = async (commentId) => {
        setIsDeleting(true);
        try {
            await axios.delete(`${BASE_URL}/comments/${commentId}/${getPostById.id}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                },
            });
            setComments((prevComments) => prevComments.filter((comment) => comment.id !== commentId));
        } catch (error) {
            setError(error);
            console.error(error.response?.data || "Erro desconhecido");
        } finally {
            setIsDeleting(false);
        }
    };

    const getComments = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/comments/${id}/post`, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                },
            });
            setComments(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.error(error.response?.data || "Erro desconhecido");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ContainerCommentsPage>
            {!isLoading && <Post post={getPostById} isCommentPage={true} isDeletePage={true} />}
            <form onSubmit={(e) => {
                e.preventDefault();
                addNewComment();
            }}>
                <ContainerComment>
                    <textarea
                        type="text"
                        placeholder="Escreva seu comentário..."
                        name="content"
                        value={form.content}
                        onChange={onChange}
                        required
                    />
                    <p>{remainingChars} caracteres</p>
                    <ButtonPost type="submit">Comentar</ButtonPost>
                </ContainerComment>
            </form>
            <ColoredLine />
            {comments.map((comment, index) => (
                <Comment
                    key={index}
                    comment={comment}
                    onDelete={handleDeleteComment}
                    comments={comments}
                    setComments={setComments}
                />
            ))}
            {isDeleting && <div>Deletando comentário...</div>}
        </ContainerCommentsPage>
    );
}
