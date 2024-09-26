import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import style from "./profile.module.css";
import Post from "../_components/feed/Post";
import profileImage from "/public/gdProfile.jpeg";
import BackButton from "../_components/BackButton";
import backgroundImage from "/public/GDWithHD.jpeg";

export default function Profile() {
  const user = {
    id: "full_KEEM",
    nickname: "KEEM",
    profileImg: profileImage,
    backgroundImg: backgroundImage,
    createAt: new Date(),
    following: 3,
    followers: 2,
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
              fill
            />
          </Link>
          <div className={style.introduce}>
            <div className={style.profileImgBox}>
              <Image
                src={profileImage}
                alt="프로필"
                className={style.profileImg}
                width={135}
                height={135}
              />
            </div>
            <div className={style.userInfo}>
              <div className={style.username}>
                <b>{user.nickname}</b>
                <div>@{user.id}</div>
              </div>

              <div className={style.date}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <g>
                    <path d="M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z"></path>
                  </g>
                </svg>
                Joined {dayjs(user.createAt).format("MMMM YYYY")}
              </div>

              <div className={style.folBox}>
                <div>
                  <span>{user.following}</span> Following
                </div>
                <div>
                  <span>{user.followers}</span> Followers
                </div>
              </div>
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
