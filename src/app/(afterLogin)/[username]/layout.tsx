import RightSection from "../_components/RightSection/RightSection";
import style from "./profile.module.css";

type Prop = {
  children: React.ReactNode;
};

export default function ProfileLayout({ children }: Prop) {
  return (
    <section className={style.container}>
      {children}
      <div className={style.rightSection}>
        <RightSection />
      </div>
    </section>
  );
}
