import Link from "next/link";
import style from "./navMenu.module.css";

type IconPaths = {
  active: string;
  inactive: string;
};

type Props = {
  href: string;
  label: string;
  segment: string;
  currentSegment: null | string;
  iconPaths: IconPaths;
};

export default function NavMenuItem({
  href,
  label,
  segment,
  iconPaths,
  currentSegment,
}: Props) {
  return (
    <li>
      <Link href={href}>
        {currentSegment === segment ? (
          <div className={style.navList}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon}>
              <g>
                <path d={iconPaths.active}></path>
              </g>
            </svg>
            <div style={{ fontWeight: "bold" }}>{label}</div>
          </div>
        ) : (
          <div className={style.navList}>
            <svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon}>
              <g>
                <path d={iconPaths.inactive}></path>
              </g>
            </svg>
            <div>{label}</div>
          </div>
        )}
      </Link>
    </li>
  );
}
