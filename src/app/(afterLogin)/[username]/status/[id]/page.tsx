import BackButton from "@/app/(afterLogin)/_components/BackButton";
import style from "./SinglePost.module.css";

export default function SinglePost() {
  return (
    <div className={style.singlePost}>
      <div className={style.stickyHeader}>
        <div className={style.header}>
          <BackButton />
          Post
        </div>
      </div>
    </div>
  );
}
