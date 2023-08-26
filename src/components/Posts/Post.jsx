import ImgLike from "../../../src/assets/ImgLike.svg"
import ImgDislike from "../../../src/assets/ImgDislike.svg"
import ImgComment from "../../../src/assets/ImgComment.svg"
import { ContainerPosts, SectionLikeDislikeComment, SectionPost, TitleAuthor } from "./PostsStyle"
import { goToComments } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

export default function Post () {
    const navigate = useNavigate()
    
    return(
        <ContainerPosts>
            <TitleAuthor>Enviado por: labaluno83</TitleAuthor>
            <SectionPost>Porque a maioria dos desenvolvedores usam Linux? ou as empresas de tecnologia usam Linux ?</SectionPost>
            <SectionLikeDislikeComment>
                <div className="LikeDislike">
                    <button><img src={ImgLike} alt="Dar like na postagem" /></button>
                    <p className="TotalLikes">1.2k</p>
                    <button><img src={ImgDislike} alt="Dar dislike na postagem" /></button>
                </div>
                <div className="Comments">
                    <button onClick={() => goToComments(navigate)} ><img src={ImgComment} alt="Comentários da postagem" /></button>
                    <p className="TotalComments">132</p>
                </div>
            </SectionLikeDislikeComment>
        </ContainerPosts>
    )
}