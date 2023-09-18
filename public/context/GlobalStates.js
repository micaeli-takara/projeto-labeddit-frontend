import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import Loading from "../components/Loading/LoadingPage/Loading";


export default function GlobalStates(props) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getPosts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/posts/`, {
                headers: {
                    Authorization: window.localStorage.getItem("token"),
                },
            });
            setPosts(response.data);
            setIsLoading(true)
        } catch (error) {
            setError(error);
            setIsLoading(false)
            console.error(error.response?.data || "Erro desconhecido");
        }
    };

    const context = {
        posts,
        setPosts,
        getPosts
    };

    return (
        <GlobalContext.Provider value={context}>
            {error ? (
                <Loading />
            ) : (
                props.children
            )}
        </GlobalContext.Provider>
    );
}
