"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import style from "./followRecommend.module.css";

export default function FollowRecommend() {
  const pathname = usePathname();
  const onFollow = () => {};

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/x-logo.jpg",
  };

  return (
    <article className={style.container}>
      <h3>Who to follow</h3>
      <div className={style.followRecommend}>
        <div className={style.userLogoSection}>
          <div className={style.userLogo}>
            <Image src={user.image} alt={user.id} width={50} height={50} />
          </div>
        </div>
        <div className={style.userInfo}>
          <div className={style.title}>{user.nickname}</div>
          <div className={style.count}>@{user.id}</div>
        </div>
        <div className={style.followButtonSection}>
          <button onClick={onFollow}>Follow</button>
        </div>
      </div>
    </article>
  );
}
