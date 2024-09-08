import Link from "next/link";
import Image from "next/image";
import style from "./profile.module.css";
import Post from "../_components/feed/Post";
import BackButton from "../_components/BackButton";

interface User {
  id: string;
  nickname: string;
  profileImage: string;
  backgroudImage?: string;
}

export default function Profile() {
  const user: User = {
    id: "G-Dragon",
    nickname: "GD",
    profileImage: "/gdProfile.jpeg",
    backgroudImage: "/GDWithHD.jpeg",
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
        바디 부분
        <div className={style.myInfo}>
          내 정보
          <div className={style.background}>
            <img
              src={user.backgroudImage}
              alt="배경사진"
              className={style.backgroundImg}
            />
          </div>
          <div className={style.introduce}>
            <div>
              <img
                src={user.profileImage}
                alt="프로필"
                className={style.profileImg}
              />
            </div>
          </div>
        </div>
        {/* <div className={style.feedBox}>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div> */}
      </div>
    </div>
  );
}
