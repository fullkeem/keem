import dayjs from "dayjs";
import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { faker } from "@faker-js/faker";
import style from "./chatRoom.module.css";
import relativeTime from "dayjs/plugin/relativeTime";
import BackButton from "@/app/(afterLogin)/_components/BackButton";

export default function ChatRoom() {
  const user = {
    id: 1,
    userId: "G_dragon",
    nickname: "GD",
    des: "bickbang",
    profileImg: faker.image?.avatar(),
    createdAt: new Date(),
    following: 3,
    followers: 2,
  };

  const messages = [
    {
      messageId: 1,
      roomId: 1253,
      id: "GD",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 1253,
      id: "fullKeem",
      content: "안녕하시렵니까?",
      createdAt: new Date(),
    },
  ];

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <div>
          <h2>{user.nickname}</h2>
        </div>
      </div>
      <Link href={user.nickname} className={style.userInfo}>
        <Image
          src={user.profileImg}
          alt={user.nickname}
          width={64}
          height={64}
        />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.userId}</div>
      </Link>
      <div className={style.list}>
        {messages.map((m) => {
          if (m.id === "fullKeem") {
            // 내 메시지면
            return (
              <div
                key={m.messageId}
                className={cx(style.message, style.myMessage)}
              >
                <div className={style.content}>{m.content}</div>
                <div className={style.date}>
                  {dayjs(m.createdAt).format("MMM D, YYYY, h:mm A")}
                </div>
              </div>
            );
          }
          return (
            <div
              key={m.messageId}
              className={cx(style.message, style.yourMessage)}
            >
              <div className={style.content}>{m.content}</div>
              <div className={style.date}>
                {dayjs(m.createdAt).format("MMM D, YYYY, h:mm A")}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

/*
    </main> 아닌 경우 <section className={style.container}>
      <div className={style.chatRoom}>
        <h2>Select a message</h2>
        <p>
          Choose from your existing conversations, start a<br /> new one, or
          just keep swimming.
        </p>
        <button>New message</button>
      </div>
    </section> */
