// Post.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ContainerPosts,
  SectionLikeDislikeComment,
  SectionPost,
  TitleAuthor,
} from "./PostsStyle";
import { goToComments } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import ImgColorLike from "../../../src/assets/LikeColor.svg";
import ImgLike from "../../../src/assets/LikeBlackWhite.svg";
import ImgColorDislike from "../../../src/assets/DislikeColor.svg";
import ImgDislike from "../../../src/assets/DislikeBlackWhite.svg";
import ImgComment from "../../../src/assets/ImgComment.svg";

export default function Post({ postagens }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const LikeDislike = async (like) => {
    try {
      const response = await axios.put(
        `${BASE_URL}/posts/${postagens.id}/like`,
        { like },
        {
          headers: {
            Authorization: window.localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);

      if (like) {
        setIsLiked(true);
        setIsDisliked(false);
        localStorage.setItem(`post_${postagens.id}`, "liked");
      } else {
        setIsLiked(false);
        setIsDisliked(true);
        localStorage.setItem(`post_${postagens.id}`, "disliked");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    const action = localStorage.getItem(`post_${postagens.id}`);
    if (action === "liked") {
      setIsLiked(true);
      setIsDisliked(false);
    } else if (action === "disliked") {
      setIsLiked(false);
      setIsDisliked(true);
    }
  }, [postagens.id]);

  const toggleLike = () => {
    console.log("like antes: ",isLiked)
    if (isLiked) {
      LikeDislike(false);
    } else if (isDisliked) {
      LikeDislike(true);
    } else {
      LikeDislike(true);
    }
    console.log("like depois: ", isLiked)
  };

  const toggleDislike = () => {
    console.log("dislike antes:", isDisliked)
    if (isDisliked) {
      LikeDislike(false);
    } else if (isLiked) {
      LikeDislike(false);
    } else {
      LikeDislike(false);
    }
    console.log("dislike depois", isDisliked)
  };

  return (
    <ContainerPosts>
      <TitleAuthor>Enviado por: {postagens?.creator.name}</TitleAuthor>
      <SectionPost>{postagens?.content}</SectionPost>
      <SectionLikeDislikeComment>
        <div className="LikeDislike">
          <button onClick={toggleLike} >
            <img
              src={isLiked ? ImgColorLike : ImgLike}
              alt="Dar like na postagem"
            />
          </button>
          <p className="TotalLikes">{postagens?.likes}</p>
          <button onClick={toggleDislike} >
            <img
              src={isDisliked ? ImgColorDislike : ImgDislike}
              alt="Dar dislike na postagem"
            />
          </button>
        </div>
        <div className="Comments">
          <button onClick={() => goToComments(navigate, postagens.id)}>
            <img src={ImgComment} alt="Comentários da postagem" />
          </button>
          <p className="TotalComments">{postagens?.commentsPost}</p>
        </div>
      </SectionLikeDislikeComment>
    </ContainerPosts>
  );
}
