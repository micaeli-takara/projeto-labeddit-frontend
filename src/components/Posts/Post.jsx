import ImgLike from "../../../src/assets/ImgLike.svg";
import ImgDislike from "../../../src/assets/ImgDislike.svg";
import ImgComment from "../../../src/assets/ImgComment.svg";
import {
  ContainerPosts,
  SectionLikeDislikeComment,
  SectionPost,
  TitleAuthor,
} from "./PostsStyle";
import { goToComments } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function Post({ postagens }) {
  const navigate = useNavigate();

  return (
    <ContainerPosts>
      <TitleAuthor>Enviado por: {postagens.creator.name}</TitleAuthor>
      <SectionPost>{postagens.content}</SectionPost>
      <SectionLikeDislikeComment>
        <div className="LikeDislike">
          <button>
            <img src={ImgLike} alt="Dar like na postagem" />
          </button>
          <p className="TotalLikes">{postagens.likes}</p>
          <button>
            <img src={ImgDislike} alt="Dar dislike na postagem" />
          </button>
        </div>
        <div className="Comments">
          <button onClick={() => goToComments(navigate, postagens.id)}>
            <img src={ImgComment} alt="Comentários da postagem" />
          </button>
          <p className="TotalComments">{postagens.commentsPost}</p>
        </div>
      </SectionLikeDislikeComment>
    </ContainerPosts>
  );
}
