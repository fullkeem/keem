"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";
import { PostType } from "../../_types/interface";

type Props = {
  children: ReactNode;
  post: PostType;
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.replace(`/${post.user.id}/status/${post.postId}`);
  };
  return (
    <article onClickCapture={onClick} className={style.post}>
      {children}
    </article>
  );
}
