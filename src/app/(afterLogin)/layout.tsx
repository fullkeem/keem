import { ReactNode } from "react";
import style from "./layout.module.css";
import Link from "next/link";
import NavMenu from "./_components/navMenu/NavMenu";
import LogoutButton from "./_components/logoutButton/LogoutButton";
import TrendList from "./_components/trendList/TrendList";
import FollowRecommend from "./_components/followRecommend/FollowRecommend";
import SearchBar from "./_components/SearchBar";
import Logo from "./_components/Logo";

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
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
              <Link href="/compose/tweet" className={style.postButton}>
                게시하기
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
            <div className={style.searchWrapper}>
              <SearchBar />
            </div>
            <TrendList />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
