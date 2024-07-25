import Tab from "../../_components/homeTab/Tab";
import style from "./exploreHeader.module.css";
import ExploreSearchBar from "./ExploreSearchBar";

export default function ExploreHeader() {
  return (
    <header className={style.container}>
      <ExploreSearchBar />
      <Tab />
    </header>
  );
}
