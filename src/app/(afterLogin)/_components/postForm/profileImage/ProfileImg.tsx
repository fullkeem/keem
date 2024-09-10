import Image from "next/image";
import userImg from "/public/KEEM_logo.png";
import style from "./profileImg.module.css";
import Link from "next/link";

export default function ProfileImg() {
  const me = {
    id: "keem",
    image: userImg,
  };
  return (
    <div className={style.userImg}>
      <Link href={`/${me.id}`}>
        <Image src={me.image} alt={me.id} width={40} height={40} />
        <div className={style.postImageShade} />
      </Link>
    </div>
  );
}
