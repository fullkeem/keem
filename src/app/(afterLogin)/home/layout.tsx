import RightSection from "../_components/RightSection/RightSection";
import style from "./home.module.css";

type Props = {
  children: React.ReactNode;
  rightSection: React.ReactNode;
};

export default function HomeLayout({ children, rightSection }: Props) {
  return (
    <section className={style.container}>
      {children}
      <div className={style.rightSection}>
        <RightSection />
      </div>
    </section>
  );
}
