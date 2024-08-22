import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import PostList, {postLoader} from './components/PostList.jsx';
import Form from './components/Form.jsx';

const router = createBrowserRouter([
  {path: "/", element: <App />, children:[
    {path: "/", element: <PostList/>, loader: postLoader},
    {path: "/create-post", element:<Form />},
  ]
}]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
