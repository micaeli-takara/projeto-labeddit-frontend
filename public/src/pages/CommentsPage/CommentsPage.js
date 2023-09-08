import { useContext, useEffect, useState } from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import Comment from "../../components/Comment";
import Post from "../../components/Post";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import useForm from "../../hooks/useForm";

export default function CommentsPage() {
    useProtectedPage();
    const { id } = useParams();
    const { posts } = useContext(GlobalContext);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeleting, setIsDeleting] = useState(false); // Novo estado para controle da exclusão
    const [error, setError] = useState(null);
    const { form, onChange, resetForm } = useForm({ content: "" });

    const getPostById = posts.find((post) => post.id === id);

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
            setComments([...comments, response.data]);
            resetForm();
        } catch (error) {
            setError(error);
            console.error(error.response?.data || "Erro desconhecido");
        }
    };

    const handleDeleteComment = async (commentId) => {
        setIsDeleting(true); // Inicia o estado de exclusão
        try {
           await axios.delete(`${BASE_URL}/comments/${commentId}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                },
            });
            // Update the comments state by removing the deleted comment
            setComments(comments.filter((comment) => comment.id !== commentId));
        } catch (error) {
            setError(error);
            console.error(error.response?.data || "Erro desconhecido");
        } finally {
            setIsDeleting(false); // Finaliza o estado de exclusão
        }
    };

    useEffect(() => {
        setIsLoading(true);
        const getComments = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/comments/${id}/post`, {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                });
                setComments(response.data);
            } catch (error) {
                setError(error);
                console.error(error.response?.data || "Erro desconhecido");
            } finally {
                setIsLoading(false);
            }
        };
        getComments();
    }, [id]);

    return (
        <>
            {!isLoading ? <Post post={getPostById} isCommentPage={true} /> : null}
            <form>
                <textarea
                    type="text"
                    placeholder="Escreva seu post..."
                    name="content"
                    value={form.content}
                    onChange={onChange}
                />
                <button onClick={addNewComment}>Responder</button>
            </form>
            <div>
                {comments.map((comment, index) => {
                    return (
                        <Comment
                            key={index}
                            comment={comment}
                            onDelete={handleDeleteComment}
                            comments = {comments}
                            setComments = {setComments}
                        />
                    );
                })}
            </div>
            {isDeleting && <div>Deletando comentário...</div>}
        </>
    );
}
