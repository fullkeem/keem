import style from "./explore.module.css";
import ExploreSearchBar from "./_components/ExploreSearchBar";
import ExploreTrendList from "./_components/ExploreTrendList";

export default function Explore() {
  return (
    <div className={style.container}>
      <ExploreSearchBar />
      <ExploreTrendList />
    </div>
  );
}
