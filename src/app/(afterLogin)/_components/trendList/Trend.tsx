import Link from "next/link";
import style from "./trend.module.css";

export default function Trend() {
  return (
    <Link href={`/search?q=검색결과`} className={style.container}>
      <div className={style.count}>Trending in South Korea</div>
      <div className={style.title}>keem</div>
      <div className={style.count}>10.1K posts</div>
    </Link>
  );
}
