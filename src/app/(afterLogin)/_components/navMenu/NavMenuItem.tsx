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
  iconPaths: IconPaths;
  currentSegment: string;
};

export default function NavMenuItem({
  href,
  label,
  segment,
  iconPaths,
  currentSegment,
}: Props) {
  const isActive = segment === currentSegment;
  return (
    <li>
      <Link href={href}>
        <div className={style.navList}>
          <svg viewBox="0 0 24 24" aria-hidden="true" className={style.icon}>
            <g>
              <path d={isActive ? iconPaths.active : iconPaths.inactive}></path>
            </g>
          </svg>
          <div>{label}</div>
        </div>
      </Link>
    </li>
  );
}
