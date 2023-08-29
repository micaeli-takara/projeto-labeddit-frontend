import Post from "../../components/Posts/Post";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ButtonPost, ContainerPost, ContainerPostPage, ColoredLine} from "./PostsPageStyle";

export default function PostsPage() {
    useProtectedPage()

    return (
        <ContainerPostPage>
            <ContainerPost>
                <input type="text" placeholder="Escreva seu post..." />
            </ContainerPost>
            <ButtonPost>Postar</ButtonPost>
            <ColoredLine/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </ContainerPostPage>
    )
}