import FollowRecommend from "../_components/followRecommend/FollowRecommend";
import RightSection from "../_components/RightSection/RightSection";
import style from "./explore.module.css";

type Prop = {
  children: React.ReactNode;
};

export default function ExploreLayout({ children }: Prop) {
  return (
    <section className={style.container}>
      {children}
      <div className={style.rightSection}>
        <RightSection />
      </div>
    </section>
  );
}
