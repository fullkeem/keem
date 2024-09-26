import BackButton from "@/app/(afterLogin)/_components/BackButton";
import style from "./SinglePost.module.css";
import Post from "@/app/(afterLogin)/_components/feed/Post";
import CommentForm from "./_components/CommentForm";

export default function SinglePost() {
  return (
    <div className={style.singlePost}>
      <div className={style.stickyHeader}>
        <div className={style.header}>
          <BackButton />
          Post
        </div>
      </div>
      <div className={style.post}>
        <Post />
        <CommentForm />
      </div>
    </div>
  );
}
