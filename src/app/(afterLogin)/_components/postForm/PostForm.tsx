"use client";

import { ChangeEventHandler, FormEventHandler } from "react";
import style from "./postForm.module.css";
import { useContentStore } from "@/app/store";
import ProfileImg from "../profileImage/ProfileImg";
import FileButton from "../fileButton/FileButton";

export default function PostForm() {
  const { content, setContent } = useContentStore();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handlePosting: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContent(e.target.value);
  };

  return (
    <form className={style.postForm} onSubmit={handleSubmit}>
      <div className={style.postUserSection}>
        <ProfileImg />
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
            <FileButton />
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
