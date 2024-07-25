import style from "../search.module.css";
import SearchTab from "./SearchTab";
import BackButton from "../../_components/BackButton";
import ExploreSearchBar from "../../explore/_components/ExploreSearchBar";

type Props = {
  q?: string;
};

export default function SearchForm({ q }: Props) {
  return (
    <div className={style.topFixed}>
      <div className={style.searchBox}>
        <BackButton />
        <ExploreSearchBar />
      </div>
      <SearchTab />
    </div>
  );
}
