import Comment from "../../components/Comments/Comment";
import Posts from "../../components/Posts/Post";
import { ColoredLine } from "../Posts/PostsPageStyle";
import { ContainerCommentsPage, ContainerComment, ButtonPost } from "./CommentsPageStyle";

export default function CommentsPage() {
    return (
    <ContainerCommentsPage>
        <Posts/>
        <ContainerComment>
            <input type="text" placeholder="Adicionar comentario" />
        </ContainerComment>
        <ButtonPost>Responder</ButtonPost>
        <ColoredLine/>
        <Comment/>
            <Comment/>
            <Comment/>
            <Comment/>
    </ContainerCommentsPage>
    )
}