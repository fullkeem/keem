import PostForm from "../_components/feed/PostForm";
import Tab from "../_components/feed/Tab";
import style from "./home.module.css";

export default function Home() {
  return (
    <div className={style.home}>
      <Tab />
      <PostForm />
    </div>
  );
}
