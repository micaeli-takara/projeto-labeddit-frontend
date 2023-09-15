import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostsPage from "../pages/PostsPage/PostsPage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Header from "../components/Header/Header";

export default function Router() {
    return (
        <BrowserRouter>
         <Header/>
            <Routes>
                <Route path="/" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/comments/:id/posts" element={<CommentsPage/>}/>
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}