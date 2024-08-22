import { BiLike, BiDislike } from "react-icons/bi";
import "./App.css";
import { useContext, useReducer } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import { FaDeleteLeft } from "react-icons/fa6";

const InitialState = {
  likes: 0,
  dislikes: 0
};

  const reducerLikes = (currState, action) => {
    switch (action) {
      case 'likes':
        return {...currState, likes: currState.likes + 1};

      case 'dislikes':
        return {...currState, dislikes: currState.dislikes + 1};
    
      default:
        return InitialState;
    }
  }

function Post({ post }) {

  const { deletePost } = useContext(PostListData);

  const [countLikes, dispatch] = useReducer(reducerLikes, InitialState);

  return (
    <div className="card postCard" style={{ width: "40%" }}>

      <div className="card-body postBody">
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
           <FaDeleteLeft></FaDeleteLeft> 
            <span className="visually-hidden">unread messages</span>
          </span>
        <h5 className="card-title">{post.title}</h5>

        <p className="card-text">{post.body}</p>
        <div
          className="alert alert-dark"
          style={{ width: "100%"}}
          role="alert"
        >
          <a
            href="#"
            className="btn btn-primary"
            style={{ backgroundColor: "#DC3545", border: "none", marginLeft: '5px'}} 
            onClick={(event) => {dispatch('likes'); event.preventDefault()}}
          >
            <BiLike /> {countLikes.likes}
          </a>

          <a
            href="#"
            className="btn btn-primary"
            style={{ backgroundColor: "lighblue", border: "none",marginLeft: '5px'}} 
            onClick={(event) => {dispatch('dislikes'); event.preventDefault()}}
          >
            <BiDislike /> {countLikes.dislikes}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Post;
