"use client";

import Trend from "./Trend";
import style from "./trendList.module.css";
import { usePathname } from "next/navigation";

export default function TrendList() {
  const pathname = usePathname();

  if (pathname === "/explore") {
    return null;
  }

  return (
    <main className={style.container}>
      <div className={style.trend}>
        <h3>Trends for you</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
