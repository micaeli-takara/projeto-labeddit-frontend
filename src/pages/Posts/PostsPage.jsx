import { useContext } from "react";
import Post from "../../components/Posts/Post";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ButtonPost, ContainerPost, ContainerPostPage, ColoredLine } from "./PostsPageStyle";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function PostsPage() {
  useProtectedPage();

  const { form, onChange, posts, addNewPost } = useContext(GlobalContext);

  return (
    <ContainerPostPage>
      <ContainerPost>
        <div className="inputForm">
          <textarea
            placeholder="Escreva seu post..."
            name="content"
            value={form.content}
            onChange={onChange}
          />
        </div>
        <ButtonPost onClick={addNewPost}>Postar</ButtonPost>
      </ContainerPost>
      <ColoredLine />
      {posts.map((postItem, index) => {
        return <Post key={index} postagens={postItem} />;
      })}
    </ContainerPostPage>
  );
}