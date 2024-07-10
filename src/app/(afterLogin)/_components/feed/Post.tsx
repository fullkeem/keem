import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import style from "./post.module.css";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function Post() {
  interface User {
    id: string;
    nickname: string;
    image: string;
  }

  interface Post {
    user: User;
    content: string;
    createAt: Date;
    images?: string[];
  }

  const post: Post = {
    user: {
      id: "G-Dragon",
      nickname: "GD",
      image: "/gdProfile.jpeg",
    },
    content: "정대리와 함께 ^^",
    createAt: new Date(),
    images: ["/GDWithHD.jpeg"],
  };

  return (
    <article className={style.post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${post.user.id}`}>
            <Image
              src={post.user.image}
              alt={post.user.nickname}
              width={40}
              height={40}
            />
          </Link>
          <div className={style.postShade} />
        </div>
        <div className={style.postBody}>
          <div className={style.postMeta}>
            <Link href={`/${post.user.id}`}>
              <span className={style.postUserName}>{post.user.nickname}</span>
              &nbsp;
              <span className={style.postUserId}>@{post.user.id}</span>
              &nbsp;<span className={style.dot}>·</span> &nbsp;
            </Link>
            <span className={style.postDate}>
              {" "}
              {dayjs(post.createAt).fromNow(true)}
            </span>
          </div>
          <div className={style.postContent}>{post.content}</div>
          <div className={style.postImageSection}>
            {post.images && post.images.length > 0 && (
              <div className={style.postImageSection}>
                <img src={post.images[0]} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
