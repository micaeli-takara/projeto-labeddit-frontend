import ImgLike from "../../../src/assets/ImgLike.svg"
import ImgDislike from "../../../src/assets/ImgDislike.svg"
import { ContainerComment, SectionLikeDislikeComment, SectionComment, TitleAuthor } from "./CommentStyle"

export default function Comment() {
    return (
        <ContainerComment>
            <TitleAuthor>Enviado por: labaluno83</TitleAuthor>
            <SectionComment>Não posso falar por todos, mas usar Linux ajudou meu pc a ter uma performance melhor (e evitou que eu precisasse comprar um novo)</SectionComment>
            <SectionLikeDislikeComment>
                <div className="LikeDislike">
                    <button><img src={ImgLike} alt="Dar like na postagem" /></button>
                    <p className="TotalLikes">1.2k</p>
                    <button><img src={ImgDislike} alt="Dar dislike na postagem" /></button>
                </div>
            </SectionLikeDislikeComment>
        </ContainerComment>
    )
}