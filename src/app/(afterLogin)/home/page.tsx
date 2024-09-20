import Post from "../_components/feed/Post";
import PostForm from "../_components/postForm/PostForm";
import Tab from "../_components/homeTab/Tab";
import style from "./home.module.css";
import RightSection from "../_components/RightSection/RightSection";

export default function Home() {
  return (
    <div className={style.home}>
      <Tab />
      <PostForm />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
