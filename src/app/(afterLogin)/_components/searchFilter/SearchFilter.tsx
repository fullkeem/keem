import style from "./searchFilter.module.css";

export default function SearchFilter() {
  return (
    <div>
      <h5 className={style.filterTitle}>Search filters</h5>
      <div className={style.filterSection}>
        <div>
          <label>People</label>
          <div className={style.radio}>
            <div>From anyone</div>
            <input type="radio" name="pf" defaultChecked />
          </div>
          <div className={style.radio}>
            <div>People you follow</div>
            <input type="radio" name="pf" value="on" />
          </div>
        </div>
      </div>
    </div>
  );
}
