import { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { PostList } from "../store/post-list-store";

function CreatePost() {
    const { addPost } = useContext(PostList);
    const navigate = useNavigate();

    async function handleSubmit(event) {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(event.target);
      const postData = Object.fromEntries(formData);

      const response = await fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      const post = await response.json();
      addPost(post); 
      console.log(post);
      navigate("/");
    }

      return (
        <form method="POST" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              placeholder="Enter User ID."
              name="userId"
              type="text"
              className="form-control"
              id="userId"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="How are you feeling today..."
              className="form-control"
              id="title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Post Content
            </label>
            <textarea
              placeholder="Tell us more about it ..."
              name="body"
              type="text"
              rows="4"
              className="form-control"
              id="content"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      );
    }

// async function createPostAction(data) {
//   const {addPost} = useContext(PostList);
//   const formData = await data.request.formData();
//   const postData = Object.fromEntries(formData);

//   fetch("https://dummyjson.com/posts/add", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(postData),
//   })
//     .then((res) => res.json())
//     .then((post) => {
//       addPost(post);
//       console.log(post);
//     });
//   return redirect("/");
// }

export default CreatePost;
