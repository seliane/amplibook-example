import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import {RequireAuth} from "./components/RequireAuth";
import Profile from "./pages/ProfilePage";
import PostEditPage from "./pages/PostEditPage";
import MyPosts from "./pages/MyPostsPage";
import Home from './pages/HomePage.js'
import Posts from "./pages/PostsPage";
import {Login} from "./components/Login";
import About from "./pages/AboutPage";
import NavigationBars from "./components/NavigationBars";
import {contentStyle, pageStyle} from "./styles/styles";

function App() {

    return (
        <div style={pageStyle}>
            <NavigationBars/>
            <div>
                <Router>
                    <div style={contentStyle}>
                        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
                        <Routes>
                            <Route path="/about" element={<About/>}/>
                            <Route path="/profile" element={
                                <RequireAuth>
                                    <Profile/>
                                </RequireAuth>
                            }/>
                            <Route path="/posts" element={
                                <RequireAuth>
                                    <Posts/>
                                </RequireAuth>
                            }/>
                            <Route path="/post/:postId" element={
                                <RequireAuth>
                                    <PostEditPage/>
                                </RequireAuth>
                            }/>
                            <Route path="/my-posts" element={
                                <RequireAuth>
                                    <MyPosts/>
                                </RequireAuth>
                            }/>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/login" element={<Login/>}/>

                        </Routes>
                    </div>
                </Router>
            </div>
        </div>
    );
}

export default App;
