import Trend from "./Trend";
import style from "./trendList.module.css";

export default function TrendList() {
  return (
    <main className={style.container}>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </main>
  );
}
