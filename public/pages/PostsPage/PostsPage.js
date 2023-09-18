    import { useContext, useEffect, useState } from "react"
    import { GlobalContext } from "../../context/GlobalContext"
    import useProtectedPage from "../../hooks/useProtectedPage";
    import axios from "axios";
    import { BASE_URL } from "../../constants/url";
    import useForm from "../../hooks/useForm";
    import {
        ButtonPost,
        ContainerPost,
        ContainerPostPage,
        ColoredLine,
        FullScreenWrapper,
    } from "./PostsStyle";
    import Post from "../../components/Post/Post";
    import Loading from "../../components/Loading/LoadingPage/Loading";

    export default function PostsPage() {
        useProtectedPage()
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);
        const [remainingChars, setRemainingChars] = useState(480);
        const { posts, setPosts, getPosts } = useContext(GlobalContext)
        const { form, onChange, cleanForm } = useForm({
            content: "",
        });

        useEffect(() => {
            getPosts();
        }, []);

        useEffect(() => {
            const remaining = 480 - form.content.length;
            setRemainingChars(remaining);
        }, [form.content]);


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
            if (remainingChars < 0) {
                setIsLoading(false);
                alert("Limite de caracteres excedido");
                return;
            }
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
                setIsLoading(true);
            } catch (error) {
                setError(error.response);
                setIsLoading(false);
            }
        };

        return (
            <>
                {isLoading && (
                    <FullScreenWrapper>
                        <Loading />
                    </FullScreenWrapper>
                )}
                <ContainerPostPage>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        addNewPost();
                        getPosts();
                        setIsLoading(true);
                        if (remainingChars >= 0) {
                            cleanForm();
                        }
                    }}>
                        <ContainerPost>
                            <textarea
                                placeholder="Escreva seu post..."
                                name="content"
                                value={form.content}
                                onChange={onChange}
                                required
                            />
                            <p>{remainingChars} caracteres restantes</p>
                            <ButtonPost type="submit">Postar</ButtonPost>
                        </ContainerPost>
                    </form>
                    <ColoredLine />
                    {isLoading && <p>Carregando...</p>}
                    {posts.map((post, index) => {
                        return (
                            <Post
                                key={index}
                                post={post}
                                onDelete={handleDeletePost}
                            />
                        );
                    })}
                </ContainerPostPage>
            </>
        )
    }