import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { addtoserver, getfromserver, deleteElementinserver } from "./services/blogservices"; 
function App() {
  // const [blogItem, setBlogItems] = useState([]);
  const [selectedTab, setSelectedTab] = useState("Home"); 

  // const handleNewItem = async (_id, title, body, reactions, userId, tags) => {
  //   console.log(`Added New Id: ${_id} Added New Title: ${title} Added New Body: ${body} Added New Reactions: ${reactions} Added New userId: ${userId} Added New Tags: ${tags}`);
  //   const item = await addtoserver(_id, title, body, reactions, userId, tags);
  //   const newitem = { ...item, completed: false };
  //   const newBlogItems = [...blogItem, newitem];
  //   setBlogItems(newBlogItems);
  // };

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? (
            <PostList/>
          ) : (
            <CreatePost/>
          )}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;