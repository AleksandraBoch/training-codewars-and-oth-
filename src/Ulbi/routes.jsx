import About from "./pages/about";
import Posts from "./pages/posts";
import PostId from "./pages/PostId";


export const routes=[
    {path:'/about',component:About, exact:true},
    {path:'/posts',component:Posts, exact:true},
    {path:'/posts/:id',component:PostId, exact:true}
]