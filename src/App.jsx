import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebars from "./components/Sidebars";
import "./components/App.css";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  const handleOnCLick = (event) => {
    setSelectedTab(event.target.innerText);
  };

  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebars
          onHandleClick={handleOnCLick}
          selectedTab={selectedTab}
        ></Sidebars>

        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
