import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST') {
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId);
    return newPostList;
  }else if (action.type === 'ADD_POST') {
    newPostList = [action.payload.post, ...currPostList]
    return newPostList;
  }else if (action.type === 'ADD_ALL_POST') {
    newPostList = action.payload.posts
    return newPostList;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (post) => {
    dispatchPostList({
      type: 'ADD_POST',
      payload:{post}
    })
  };

  const addAllPosts = (posts) => {
    dispatchPostList({
      type: 'ADD_ALL_POST',
      payload:  {
        posts
      }
    })
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type : 'DELETE_POST',
      payload : {
        postId,
      },
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost}}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
