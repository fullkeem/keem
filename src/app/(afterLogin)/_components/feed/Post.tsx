import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import style from "./post.module.css";
import relativeTime from "dayjs/plugin/relativeTime";
import PostButton from "./PostButton";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
import { PostType } from "../../_types/interface";

dayjs.extend(relativeTime);

export default function Post() {
  const post: PostType = {
    postId: 1,
    user: {
      id: "G-Dragon",
      nickname: "GD",
      image: "/gdProfile.jpeg",
    },
    content: "정대리와 함께 ^^ (근데 나 인턴임ㅎㅎ)",
    createAt: new Date(),
    images: [],
  };

  if (Math.random() > 0.5) {
    post.images?.push({
      imageId: 1,
      link: faker.image.urlLoremFlickr(),
      description: faker.word.sample(),
    });
  }

  return (
    <PostArticle post={post}>
      <div className={style.postWrapper}>
        <div className={style.postUserSection}>
          <Link href={`/${post.user.id}`}>
            <Image
              src={post.user.image}
              alt={post.user.nickname}
              width={40}
              height={40}
            />
            <div className={style.postImageShade} />
          </Link>
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
                {post.images && post.images.length > 0 && (
                  <Link
                    href={`${post.user.id}/status/${post.postId}/photo/${post.images[0].imageId}`}
                  >
                    <img
                      src={post.images[0].link}
                      alt={post.images[0].description}
                    />
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className={style.postActionButton}>
            <PostButton />
          </div>
        </div>
      </div>
    </PostArticle>
  );
}
