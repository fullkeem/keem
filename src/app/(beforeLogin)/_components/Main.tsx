import Link from "next/link";
import Image from "next/image";
import style from "./main.module.css";
import keemLogo from "/public/keem-white.svg";

export default function Main() {
  return (
    <>
      <div className={style.left}>
        <Image src={keemLogo} alt="logo" className={style.logo} />
      </div>
      <div className={style.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={style.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={style.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
