import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import style from "./post.module.css";
import { PostType } from "../../_types/interface";

export default function PostImages({ post }: { post: PostType }) {
  if (!post.images || post.images.length === 0) return null;

  const { images, user, postId } = post;

  return (
    <div
      className={cx(style.postImageSection, {
        [style.oneImage]: images.length === 1,
        [style.twoImages]: images.length === 2,
        [style.threeImages]: images.length === 3,
        [style.fourImages]: images.length === 4,
      })}
    >
      {images.map((image, index) => (
        <Link
          key={image.imageId}
          href={`/${user.id}/status/${postId}/photo/${image.imageId}`}
          className={cx(style.postImage, {
            [style.largeImage]: index === 0 && images.length === 3,
            [style.rightTopImage]: index === 1 && images.length === 3,
            [style.rightBottomImage]: index === 2 && images.length === 3,
          })}
          style={{
            backgroundImage: `url(${image.link})`,
            backgroundSize: "cover",
          }}
        >
          <Image
            src={image.link}
            alt={image.description}
            className={style.postImageContent}
            fill
          />
        </Link>
      ))}
    </div>
  );
}
