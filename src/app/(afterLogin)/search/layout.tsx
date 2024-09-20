import FollowRecommend from "../_components/followRecommend/FollowRecommend";
import SearchFilter from "../_components/searchFilter/SearchFilter";
import TrendList from "../_components/trendList/TrendList";
import style from "./search.module.css";

type Prop = {
  children: React.ReactNode;
};

export default function SearchLayout({ children }: Prop) {
  return (
    <section className={style.container}>
      {children}
      <div className={style.rightSection}>
        <SearchFilter />
        <TrendList />
        <div className={style.marginTop}>
          <FollowRecommend />
        </div>
      </div>
    </section>
  );
}
