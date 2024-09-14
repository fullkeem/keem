import { faker } from "@faker-js/faker";
import style from "./photoModal.module.css";
import PhotoModalCloseButton from "./_components/PhotoModalCloseButton";
import PostButton from "@/app/(afterLogin)/_components/feed/PostButton";
import Post from "@/app/(afterLogin)/_components/feed/Post";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_components/CommentForm";

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text(),
    },
  };

  return (
    <div className={style.container}>
      <PhotoModalCloseButton />
      <div className={style.imageZone}>
        <img src={photo.link} alt={photo.Post?.content} />
        <div
          className={style.image}
          style={{ backgroundImage: `url(${photo.link})` }}
        />
        <div className={style.buttonZone}>
          <div className={style.buttonInner}>
            <PostButton />
          </div>
        </div>
      </div>
      <div className={style.commentZone}>
        <Post noImage />
        <CommentForm />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
