import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import ImgLikeBlackWhite from "../../../src/assets/LikeBlackWhite.svg";
import ImgLikeColor from "../../../src/assets/LikeColor.svg";
import ImgDislike from "../../../src/assets/DislikeBlackWhite.svg";
import ImgDislikeColor from "../../../src/assets/DislikeColor.svg";

export default function LikeDislikeButtons({ postId, likes }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [totalLikes, setTotalLikes] = useState(likes);

  const handleLikeDislike = async (likeAction) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/posts/${postId}/like`,
        { like: likeAction },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      if (likeAction) {
        if (isLiked) {
          setIsLiked(false);
          setTotalLikes(totalLikes - 1);
          // window.localStorage.removeItem("isLiked_" + postId);
        } else if (isDisliked) {
          setIsDisliked(false);
          setIsLiked(true);
          setTotalLikes(totalLikes + 2);
          // window.localStorage.setItem("isLiked_" + postId, "true");
          // window.localStorage.removeItem("isDisliked_" + postId);
        } else {
          setIsLiked(true);
          setTotalLikes(totalLikes + 1);
          // window.localStorage.setItem("isLiked_" + postId,"true")
        }
      } else {
        if (isDisliked) {
          setIsDisliked(false);
          setTotalLikes(totalLikes + 1);
          // window.localStorage.removeItem("isDisliked_" + postId)
        } else if (isLiked) {
          setIsDisliked(true);
          setIsLiked(false);
          setTotalLikes(totalLikes - 2);
          // window.localStorage.setItem("isDisliked_" + postId, "true")
          // window.localStorage.removeItem("isLiked_" + postId)
        } else {
          setIsDisliked(true);
          setTotalLikes(totalLikes - 1);
          // window.localStorage.setItem("isDisliked_" + postId, "true")
        }
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const getLikeDislike = async () => {
    try {
      const userId = window.localStorage.getItem("token");
      const response = await axios.get(
        `${BASE_URL}/posts/${postId}/${userId}/like`,
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      ).then( res => {
        const statusLike = res.data;
            if (statusLike == "ON LIKED") {
            setIsLiked(true);
            setIsDisliked(false);
            } else if (statusLike == "ON DISLIKED") {
            setIsLiked(false);
            setIsDisliked(true);
            } else {
            setIsLiked(false);
            setIsDisliked(false);
            }
      }
        );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getLikeDislike();
  }, []);

  return (
    <div className="LikeDislike">
      <button
        type="button"
        onClick={() => {
          handleLikeDislike(true);
        }}
      >
        <img
          src={isLiked ? ImgLikeColor : ImgLikeBlackWhite}
          alt={isLiked ? "Remover like da postagem" : "Dar like na postagem"}
        />
      </button>
      <p className="TotalLikes">{totalLikes}</p>
      <button
        type="button"
        onClick={() => {
          handleLikeDislike(false);
        }}
      >
        <img
          src={isDisliked ? ImgDislikeColor : ImgDislike}
          alt="Dar dislike na postagem"
        />
      </button>
    </div>
  );
}
