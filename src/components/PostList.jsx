import Post from "./Post";
import Message from "./Message";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const postList = useLoaderData()

  return (
    <>
      {postList.length === 0 && <Message />}
      {postList.map((post) => <Post key={post.id} post={post}></Post>)}
    </>
  );
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
