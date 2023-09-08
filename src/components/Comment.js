import ImageLikeDesativado from "../assets/LikeBlackWhite.svg";
import ImageLikeAtivado from "../assets/LikeColor.svg";
import ImageDislikeDesativado from "../assets/DislikeBlackWhite.svg";
import ImageDislikeAtivado from "../assets/DislikeColor.svg";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import axios from "axios";

export default function Comment({ comment, onDelete, comments, setComments }) {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(comment.likes - comment.dislikes);

    console.log(comments, "COMMENTS")

        const atualizaComment = async (id, likeAction, isLiked) => {
        comments.forEach(element => {
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

        setComments(comments);
    }



    const handleLikeDislikeComment = async (likeAction) => {
        setIsLoading(true)
        try {
            const response = await axios.put(
                `${BASE_URL}/comments/${comment.id}/like`,
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
                    atualizaComment(comment.id, likeAction, isLiked);

                } else if (isDisliked) {
                    setIsDisliked(false);
                    setIsLiked(true);
                    setTotalLikes(totalLikes + 2);
                    atualizaComment(comment.id, likeAction, isLiked);
                } else {
                    setIsLiked(true);
                    setTotalLikes(totalLikes + 1);
                    atualizaComment(comment.id, likeAction, isLiked);
                }
            } else {
                if (isDisliked) {
                    setIsDisliked(false);
                    setTotalLikes(totalLikes + 1);
                    atualizaComment(comment.id, likeAction, isLiked);
                } else if (isLiked) {
                    setIsDisliked(true);
                    setIsLiked(false);
                    setTotalLikes(totalLikes - 2);
                    atualizaComment(comment.id, likeAction, isLiked);
                } else {
                    setIsDisliked(true);
                    setTotalLikes(totalLikes - 1);
                    atualizaComment(comment.id, likeAction, isLiked);
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

     const getLikeDislike = async () => {
        try {
            const userId = window.localStorage.getItem("token");
            await axios
                .get(`${BASE_URL}/comments/${comment.id}/${userId}/like`, {
                    headers: {
                        Authorization: window.localStorage.getItem("token"),
                    },
                })
                .then((res) => {
                    const statusLike = res.data;
                    if (statusLike === "already liked") {
                        setIsLiked(true);
                        setIsDisliked(false);
                    } else if (statusLike === "already disliked") {
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

    useEffect(() => {
        getLikeDislike();
    }, [handleLikeDislikeComment]);

    return (
        <div>
            <p>Enviado por: {comment.creator.name}</p>
            <p>{comment.content}</p>
            <button onClick={() => handleLikeDislikeComment(true)}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isLiked ? (
                    <img src={ImageLikeAtivado} alt="like" />
                ) : (
                    <img src={ImageLikeDesativado} alt="like" />
                )}
            </button>
            <p className="TotalLikes">{totalLikes}</p>
            <button onClick={() => handleLikeDislikeComment(false)}>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isDisliked ? (
                    <img src={ImageDislikeAtivado} alt="like" />
                ) : (
                    <img src={ImageDislikeDesativado} alt="like" />
                )}
            </button>
            <button onClick={() => onDelete(comment.id)}>Excluir</button>
        </div>
    )
}