import { useNavigate } from "react-router-dom";
import { goToComments } from "../routes/coordinator";
import ImageLikeDesativado from "../assets/LikeBlackWhite.svg";
import ImageLikeAtivado from "../assets/LikeColor.svg";
import ImageDislikeDesativado from "../assets/DislikeBlackWhite.svg";
import ImageDislikeAtivado from "../assets/DislikeColor.svg";
import { BASE_URL } from "../constants/url";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../context/GlobalContext";

export default function Post({ post, onDelete, isCommentPage }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(post.likes - post.dislikes);
    const { posts, setPosts } = useContext(GlobalContext)

    console.log(posts, "POSTS")

    const atualizaPost = async (id, likeAction, isLiked) => {
        posts.forEach(element => {
            if (element.id === id) {
                if (likeAction) {
                    if (isLiked) {
                        element.likes -= 1;
                    } else if (isDisliked) {
                        element.likes += 1;
                        element.dislikes -= 1;
                    } else {
                        element.likes += 1;
                    }
                } else {
                    if (isDisliked) {
                        element.dislikes -= 1;
                    } else if (isLiked) {
                        element.dislikes += 1;
                        element.likes -= 1;
                    } else {
                        element.dislikes += 1;
                    }
                }
            }
        });

        setPosts(posts);
    }

    const handleLikeDislike = async (likeAction) => {
        setIsLoading(true);
        try {
            const response = await axios.put(
                `${BASE_URL}/posts/${post.id}/like`,
                { like: likeAction },
                {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                }
            );

            if (likeAction) {
                if (isLiked) {
                    setIsLiked(false);
                    setTotalLikes(totalLikes - 1);
                    atualizaPost(post.id, likeAction, isLiked);
                } else if (isDisliked) {
                    setIsDisliked(false);
                    setIsLiked(true);
                    setTotalLikes(totalLikes + 2);
                    atualizaPost(post.id, likeAction, isLiked);
                } else {
                    setIsLiked(true);
                    setTotalLikes(totalLikes + 1);
                    atualizaPost(post.id, likeAction, isLiked);
                }
            } else {
                if (isDisliked) {
                    setIsDisliked(false);
                    setTotalLikes(totalLikes + 1);
                    atualizaPost(post.id, likeAction, isLiked);
                } else if (isLiked) {
                    setIsDisliked(true);
                    setIsLiked(false);
                    setTotalLikes(totalLikes - 2);
                    atualizaPost(post.id, likeAction, isLiked);
                } else {
                    setIsDisliked(true);
                    setTotalLikes(totalLikes - 1);
                    atualizaPost(post.id, likeAction, isLiked);
                }
            }
            console.log(response.data)
        } catch (error) {
            setError(error);
            console.error(error.response?.data || "Erro desconhecido");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getLikeDislike();
    }, [handleLikeDislike]);

    const getLikeDislike = async () => {
        try {
            const userId = window.localStorage.getItem("token");
            await axios
                .get(`${BASE_URL}/posts/${post.id}/${userId}/like`, {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                })
                .then((res) => {
                    const statusLike = res.data;
                    if (statusLike === "ON LIKED") {
                        setIsLiked(true);
                        setIsDisliked(false);
                    } else if (statusLike === "ON DISLIKED") {
                        setIsLiked(false);
                        setIsDisliked(true);
                    } else {
                        setIsLiked(false);
                        setIsDisliked(false);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <p>{post.creator.name}</p>
            <p>{post.content}</p>
            <button onClick={() => handleLikeDislike(true)}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isLiked ? (
                    <img src={ImageLikeAtivado} alt="like" />
                ) : (
                    <img src={ImageLikeDesativado} alt="like" />
                )}
            </button>
            <p>{totalLikes}</p>
            <button onClick={() => handleLikeDislike(false)}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isDisliked ? (
                    <img src={ImageDislikeAtivado} alt="like" />
                ) : (
                    <img src={ImageDislikeDesativado} alt="like" />
                )}
            </button>
            <br />
            {!isCommentPage && (
                <div>
                    <button onClick={() => onDelete(post.id)}>Excluir</button>
                    <button onClick={() => goToComments(navigate, post.id)}>Comentários</button>
                </div>
            )}
        </div>
    );
}
