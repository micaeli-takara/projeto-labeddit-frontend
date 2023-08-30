import { useEffect, useState } from "react";
import Post from "../../components/Posts/Post";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ButtonPost, ContainerPost, ContainerPostPage, ColoredLine } from "./PostsPageStyle";
import axios from "axios";
import { BASE_URL } from "../../constants/url";

export default function PostsPage() {
    useProtectedPage();
    const [post, setPost] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/posts/`, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                },
            });
            setPost(response.data);
            console.log(response.data);
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
                <input type="text" placeholder="Escreva seu post..." />
            </ContainerPost>
            <ButtonPost>Postar</ButtonPost>
            <ColoredLine />
            {post.map((postItem, index) => (
                <Post key={index} postagens={postItem} />
            ))}
        </ContainerPostPage>
    );
}
