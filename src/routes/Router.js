import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/Signup/SignupPage";
import PostsPage from "../pages/Posts/PostsPage";
import CommentsPage from "../pages/Comments/CommentsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Header from "../components/Header/Header";

export default function Router() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<LoginPage/>} />
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/posts" element={<PostsPage/>} />
                <Route path="/posts/:id/comments" element={<CommentsPage/>}/>
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </BrowserRouter>
    )
}