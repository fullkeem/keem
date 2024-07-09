"use client";

import { useState } from "react";
import { useTabStore } from "@/app/store";
import style from "./tab.module.css";

export default function Tab() {
  const { tab, setTab } = useTabStore();

  const onClickFol = () => {
    setTab("Following");
  };
  const onClickFor = () => {
    setTab("For you");
  };

  return (
    <div className={style.homeFixed}>
      <ul className={style.homeTab}>
        <li onClick={onClickFor}>
          For you
          <div
            className={style.tabIndicator}
            hidden={tab === "Following"}
          ></div>
        </li>
        <li onClick={onClickFol}>
          Following
          <div className={style.tabIndicator} hidden={tab === "For you"}></div>
        </li>
      </ul>
    </div>
  );
}
