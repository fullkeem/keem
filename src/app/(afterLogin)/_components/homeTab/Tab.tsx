"use client";

import { useTabStore } from "@/app/store";
import style from "./tab.module.css";
import { usePathname } from "next/navigation";

export default function Tab() {
  const { tab, setTab } = useTabStore();
  const pathname = usePathname();

  if (pathname === "/explore") {
    return (
      <div className={style.exploreFixed}>
        <ul className={style.homeTab}>
          <li>
            For you
            <div
              className={style.tabIndicator}
              hidden={tab === "Following"}
            ></div>
          </li>
          <li>
            Trending
            <div
              className={style.tabIndicator}
              hidden={tab === "For you"}
            ></div>
          </li>
        </ul>
      </div>
    );
  }

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
