import { useRef, useContext } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  // Create refs for all fields including an id field
  const idElement = useRef();
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get values from the form
    const _id = idElement.current.value;
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = Number(reactionsElement.current.value);
    const tags = tagsElement.current.value.split(" ").filter((t) => t.trim());

    // Reset the fields
    idElement.current.value = "";
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    // Call the provider's addPost function to update both the server and UI state.
    try {
      await addPost(_id, postTitle, postBody, reactions, userId, tags);
      console.log("Post successfully added");
    } catch (error) {
      console.error("Error while adding post", error);
    }
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">
          Enter your Post Id here
        </label>
        <input
          type="text"
          ref={idElement}
          className="form-control"
          id="id"
          placeholder="Your Post Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your UserId here
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
