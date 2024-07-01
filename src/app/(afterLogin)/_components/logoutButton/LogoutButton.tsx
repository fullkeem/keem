"use client";

import Image from "next/image";
import keemLogo from "/public/KEEM_logo.png";
import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: "full_KEEM",
    nickname: "KEEM",
    image: keemLogo,
  };

  const onLogout = () => {};

  return (
    <button className={style.logoutButton} onClick={onLogout}>
      <div className={style.logoutUserImage}>
        <Image src={me.image} alt={me.id} width={50} height={50} />
      </div>
      <div className={style.logoutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
