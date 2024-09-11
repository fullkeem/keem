"use client";

import { ReactNode } from "react";
import style from "./post.module.css";
import { useRouter } from "next/navigation";

type Props = {
  children: ReactNode;
  post: {
    postId: number;
    user: {
      id: string;
      nickname: string;
      image: any;
    };
    content: string;
    createAt: Date;
    images?: string[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.replace(`/${post.user.id}/status/${post.postId}`);
  };
  return (
    <article onClick={onClick} className={style.post}>
      {children}
    </article>
  );
}
