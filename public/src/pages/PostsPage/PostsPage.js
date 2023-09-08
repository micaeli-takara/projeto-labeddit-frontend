import { useContext, useState } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import Post from "../../components/Post"
import useProtectedPage from "../../hooks/useProtectedPage";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import useForm from "../../hooks/useForm";

export default function PostsPage() {
    useProtectedPage();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { posts, setPosts } = useContext(GlobalContext)
    const { form, onChange, cleanForm } = useForm({
        content: "",
    });

    const handleDeletePost = async (postId) => {
        setIsLoading(true);
        try {
            await axios.delete(`${BASE_URL}/posts/${postId}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                },
            });
            setPosts(posts.filter((post) => post.id !== postId));
        } catch (error) {
            setError(error);
            alert(error.response.data)
            console.error(error.response?.data || "Erro desconhecido");
        } finally {
            setIsLoading(false);
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
            setPosts();
            cleanForm();
        } catch (error) {
            console.log(error.response);
        }
    };

    return (
        <div>
            <form>
                <textarea

                    placeholder="Escreva seu post..."
                    name="content"
                    value={form.content}
                    onChange={onChange} />
                <button onClick={addNewPost}>Postar</button>
            </form>
            {isLoading && <p>Carregando...</p>}
            <div>
                {posts.map((post, index) => {
                    return (
                        <Post
                            key={index}
                            post={post}
                            onDelete={handleDeletePost}
                        />
                    );
                })}
            </div>
        </div>
    )
}