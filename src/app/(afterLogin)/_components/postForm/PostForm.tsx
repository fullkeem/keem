"use client";

import { useRef, ChangeEventHandler, FormEventHandler } from "react";
import Image from "next/image";
import style from "./postForm.module.css";
import userImg from "/public/KEEM_logo.png";
import { useContentStore } from "@/app/store";

export default function PostForm() {
  const imageRef = useRef<HTMLInputElement>(null);
  const { content, setContent } = useContentStore();

  const me = {
    id: "fullkeem",
    image: userImg,
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handlePosting: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  const handleClickButton = () => {
    imageRef.current?.click();
  };

  return (
    <form className={style.postForm} onSubmit={handleSubmit}>
      <div className={style.postUserSection}>
        <div className={style.postUserImage}>
          <Image src={me.image} alt={me.id} width={40} height={40} />
        </div>
      </div>
      <div className={style.postingSection}>
        <div className={style.postInputSection}>
          <label htmlFor="posting" />
          <input
            name="post up"
            id="posting"
            placeholder="What is happening?!"
            className={style.input}
            value={content}
            onChange={handlePosting}
          />
        </div>
        <div className={style.postButtonSection}>
          <div>
            <input
              type="file"
              name="imageFiles"
              ref={imageRef}
              multiple
              hidden
            />
            <button
              type="button"
              className={style.uploadButton}
              onClick={handleClickButton}
            >
              <svg width={24} viewBox="0 0 24 24" aria-hidden="true">
                <g>
                  <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                </g>
              </svg>
            </button>
          </div>
          <div>
            <button
              type="submit"
              className={style.postButton}
              disabled={!content}
            >
              post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
