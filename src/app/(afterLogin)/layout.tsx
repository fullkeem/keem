import Link from "next/link";
import { ReactNode } from "react";
import Logo from "./_components/Logo";
import style from "./layout.module.css";
import NavMenu from "./_components/navMenu/NavMenu";
import LogoutButton from "./_components/logoutButton/LogoutButton";
import TrendList from "./_components/trendList/TrendList";
import FollowRecommend from "./_components/followRecommend/FollowRecommend";
import SearchBar from "./_components/search/SearchBar";
import SearchFilter from "./_components/searchFilter/SearchFilter";

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <section className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Logo />
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/post" className={style.postButton}>
                Post
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <SearchBar />
            <TrendList />
            <div className={style.followRecommend}>
              <h3>Who to follow</h3>
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
