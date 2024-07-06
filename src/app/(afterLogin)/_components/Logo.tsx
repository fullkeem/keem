import Link from "next/link";
import Image from "next/image";
import style from "../layout.module.css";
import KEEM from "/public/keem-white.svg";

export default function Logo() {
  return (
    <Link className={style.logo} href="/home">
      <div className={style.logoFill}>
        <Image
          className={style.homeLogo}
          src={KEEM}
          alt="KEEM.com logo"
          width={100}
          height={100}
        />
      </div>
    </Link>
  );
}
