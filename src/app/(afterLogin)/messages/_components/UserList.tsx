"use client";

import dayjs from "dayjs";
import AvatarImg from "./AvatarImg";
import style from "../messages.module.css";
import relativeTime from "dayjs/plugin/relativeTime";
import { useRouter } from "next/navigation";

dayjs.extend(relativeTime);

export default function UserList() {
  const router = useRouter();
  const user = {
    id: 1,
    userId: "stowp_3",
    nickname: "stowp_3",
    profileImg: "sdfsdfds.png",
    Messages: [
      { roomId: 1253, content: "안녕하시렵니까?", createAt: new Date() },
      { roomId: 1253, content: "안녕하시냐고?", createAt: new Date() },
    ],
  };

  const handleChatClick = () => {
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <ul className={style.messageList}>
      <li className={style.messageBox} onClickCapture={handleChatClick}>
        <AvatarImg />
        <div className={style.textSection}>
          <div className={style.userInfo}>
            <b>{user.nickname}</b>
            &nbsp;
            <span>@{user.userId}</span>
            <span>·</span>
            <span className={style.messageDate}>
              {dayjs(user.Messages?.at(-1)?.createAt).format("MMM D")}
            </span>
          </div>
          <div className={style.userChat}>{user.Messages?.at(-1)?.content}</div>
        </div>
      </li>
    </ul>
  );
}
