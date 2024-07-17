import Image from "next/image";
import userImg from "/public/KEEM_logo.png";
import style from "./profileImg.module.css";

export default function ProfileImg() {
  const me = {
    id: "fullkeem",
    image: userImg,
  };
  return (
    <div className={style.userImg}>
      <Image src={me.image} alt={me.id} width={40} height={40} />
    </div>
  );
}
