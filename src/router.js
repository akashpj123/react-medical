import { createBrowserRouter } from "react-router-dom";
import Aboutus from "./components/Aboutus"
import Contact from "./components/contact";
import App from "./App";
import Login from "./components/auth/Login";
import Signup from "./components/auth/singup";
import ListPosts from "./components/blog/ListPost";
import CreatePost from "./components/blog/CreatePost";
import EditPost from "./components/blog/EditPost";
import ViewPost from "./components/blog/Viewpost";
const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'aboutus', element: <Aboutus/> },
    { path: 'Contact', element: <Contact/> },
    { path: 'Login', element: <Login/> },
    { path: 'singup', element: <Signup/> },
    { path: 'blog/posts', element: <ListPosts/> },
    { path : 'blog/posts/create' , element : <CreatePost/> },
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : '/blog/posts/:postId/edit', element: <EditPost/>}, 
    
]);

export default router;