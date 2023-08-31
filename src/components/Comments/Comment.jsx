import ImgLike from "../../../src/assets/LikeColor.svg"
import ImgDislike from "../../../src/assets/DislikeColor.svg"
import { ContainerComment, SectionLikeDislikeComment, SectionComment, TitleAuthor } from "./CommentStyle"

export default function Comment({ comentarios }) {

    return (
        <ContainerComment>
            <TitleAuthor>Enviado por: {comentarios?.creator.name}</TitleAuthor>
            <SectionComment>{comentarios?.content}</SectionComment>
            <SectionLikeDislikeComment>
                <div className="LikeDislike">
                    <button><img src={ImgLike} alt="Dar like na postagem" /></button>
                    <p className="TotalLikes">{comentarios?.likes}</p>
                    <button><img src={ImgDislike} alt="Dar dislike na postagem" /></button>
                </div>
            </SectionLikeDislikeComment>
        </ContainerComment>
    )
}