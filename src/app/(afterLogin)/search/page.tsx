import Post from "../_components/feed/Post";
import SearchForm from "./_components/SearchForm";
import style from "./search.module.css";

interface Props {
  searchParams: {
    q: string;
    f?: string;
    pf?: string;
  };
}

export default function Search({ searchParams }: Props) {
  return (
    <div className={style.searchContainer}>
      <SearchForm q={searchParams.q} />
      <div className={style.postSection}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
