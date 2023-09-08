import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/comments/:id/posts" element={<CommentsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}