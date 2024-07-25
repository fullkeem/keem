import style from "./explore.module.css";
import ExploreSearchBar from "./_components/ExploreSearchBar";
import ExploreTrendList from "./_components/ExploreTrendList";
import ExploreHeader from "./_components/ExploreHeader";

export default function Explore() {
  return (
    <div className={style.container}>
      <ExploreHeader />
      <ExploreTrendList />
    </div>
  );
}
