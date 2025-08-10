import { useReducer, useEffect, createContext } from "react";
import { getfromserver, deleteElementinserver, addtoserver } from "../services/blogservices";

export const PostList = createContext({
  postList: [],
  fetchPosts: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (state, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return action.payload;
    case "ADD_POST":
      return [action.payload, ...state];
    case "DELETE_POST":
      return state.filter((post) => post._id !== action.payload);
    default:
      return state;
  }
};

const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);

  const fetchPosts = async () => {
    try {
      const posts = await getfromserver();
      dispatch({ type: "SET_POSTS", payload: posts });
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  const addPost = async (_id, title, body, reactions, userId, tags) => {
    try {
      const newPost = await addtoserver(_id, title, body, reactions, userId, tags);
      dispatch({ type: "ADD_POST", payload: newPost });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const deletePost = async (postId) => {
    try {
      await deleteElementinserver(postId);
      dispatch({ type: "DELETE_POST", payload: postId });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostList.Provider value={{ postList, fetchPosts, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;