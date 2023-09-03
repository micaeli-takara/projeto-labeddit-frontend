import React, { useState } from "react";
import {
  ContainerPosts,
  SectionLikeDislikeComment,
  SectionPost,
  TitleAuthor,
} from "./PostsStyle";
import { goToComments } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import ImgComment from "../../../src/assets/ImgComment.svg";
import LikeDislikeButtons from "../LikeDislike/LikeDislike";

export default function Post({ postagens }) {
  const navigate = useNavigate();

  return (
    <ContainerPosts>
      <TitleAuthor>Enviado por: {postagens?.creator.name}</TitleAuthor>
      <SectionPost>{postagens?.content}</SectionPost>
      <SectionLikeDislikeComment>
        <LikeDislikeButtons
          postId={postagens.id}
          likes={postagens.likes - postagens.dislikes}
        />
        <div className="Comments">
          <button onClick={() => goToComments(navigate, postagens.id)}>
            <img src={ImgComment} alt="Comentários
             da postagem" />
          </button>
          <p className="TotalComments">{postagens?.commentsPost}</p>
        </div>
      </SectionLikeDislikeComment>
    </ContainerPosts>
  );
}
