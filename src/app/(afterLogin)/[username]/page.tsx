import Link from "next/link";
import Image from "next/image";
import style from "./profile.module.css";
import Post from "../_components/feed/Post";
import { StaticImageData } from "next/image";
import profileImage from "/public/gdProfile.jpeg";
import BackButton from "../_components/BackButton";
import backgroundImage from "/public/GDWithHD.jpeg";

interface User {
  id: string;
  nickname: string;
  profileImg: StaticImageData;
  backgroundImg?: StaticImageData;
}

export default function Profile() {
  const user: User = {
    id: "full_KEEM",
    nickname: "KEEM",
    profileImg: profileImage,
    backgroundImg: backgroundImage,
  };

  return (
    <div className={style.profileContainer}>
      <div className={style.profileHeader}>
        <div className={style.backBtn}>
          <BackButton />
        </div>
        <div className={style.idAndPosting}>
          <h3>{user.id}</h3>
          <div>3 posts</div>
        </div>
      </div>
      <div className={style.profileBody}>
        <div className={style.myInfo}>
          <Link
            className={style.background}
            href={`${user.nickname}/header_photo`}
          >
            <Image
              src={backgroundImage}
              alt="배경사진"
              className={style.backgroundImg}
              width={598}
              height={200}
            />
          </Link>
          <div className={style.introduce}>
            <div className={style.profileImgBox}>
              <Image
                src={profileImage}
                alt="프로필"
                className={style.profileImg}
              />
            </div>
          </div>
        </div>
        <div className={style.feedBox}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
}
