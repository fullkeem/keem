import SearchBar from "../search/SearchBar";
import style from "./rightSection.module.css";
import TrendList from "../trendList/TrendList";
import FollowRecommend from "../followRecommend/FollowRecommend";

export default function RightSection() {
  return (
    <section className={style.rightSection}>
      <SearchBar />
      <div className={style.trendFollow}>
        <TrendList />
        <FollowRecommend />
      </div>
    </section>
  );
}
