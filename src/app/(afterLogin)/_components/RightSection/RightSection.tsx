"use client";

import SearchBar from "../search/SearchBar";
import style from "./rightSection.module.css";
import TrendList from "../trendList/TrendList";
import FollowRecommend from "../followRecommend/FollowRecommend";
import { usePathname } from "next/navigation";

export default function RightSection() {
  const pathname = usePathname();

  const renderingRightSection = () => {
    if (pathname.startsWith("/home")) {
      return (
        <section className={style.rightSection}>
          <SearchBar />
          <div className={style.trendFollow}>
            <TrendList />
            <FollowRecommend />
          </div>
        </section>
      );
    } else if (pathname.startsWith("/explore")) {
      return (
        <section className={style.rightSection}>
          <FollowRecommend />
        </section>
      );
    } else {
      <section className={style.rightSection}>
        <SearchBar />
        <div className={style.trendFollow}>
          <FollowRecommend />
          <TrendList />
        </div>
      </section>;
    }
  };

  return <>{renderingRightSection()}</>;
}
