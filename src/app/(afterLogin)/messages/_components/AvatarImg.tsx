"use client";

import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import style from "../messages.module.css";

export default function AvatarImg() {
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setAvatar(faker.image.avatar());
  }, []);

  return (
    <div className={style.userImage}>
      <img src={avatar} alt="유저 프로필 이미지" />
    </div>
  );
}
