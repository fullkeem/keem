"use client";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import style from "./tweet.module.css";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef, useCallback } from "react";
import ProfileImg from "@/app/(afterLogin)/_components/profileImage/ProfileImg";
import FileButton from "@/app/(afterLogin)/_components/fileButton/FileButton";

export default function TweetModal() {
  const router = useRouter();
  const [showPicker, setShowPicker] = useState(false);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const emojiRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDialogElement>(null);

  const clickEmojiButton = () => {
    setShowPicker(!showPicker);
  };

  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const handleClickOutSide = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [handleClose]);

  useEffect(() => {
    const textArea = textAreaRef.current;

    if (textArea) {
      const resizeTextArea = () => {
        textArea.style.height = "auto";
        textArea.style.height = `${textArea.scrollHeight}px`;
      };
      textArea.addEventListener("input", resizeTextArea);
      resizeTextArea();

      return () => {
        textArea.removeEventListener("input", resizeTextArea);
      };
    }
  }, []);

  return (
    <div className={style.modalBackground}>
      <dialog className={style.modalBox} ref={modalRef}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <button
              type="button"
              className={style.closeModal}
              onClick={handleClose}
            >
              <svg viewBox="0 0 24 24" width={20}>
                <g>
                  <path d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                </g>
              </svg>
            </button>
            <button type="button" className={style.drafts}>
              Drafts
            </button>
          </div>
          <div className={style.modalBody}>
            <div className={style.writing}>
              <div className={style.userImg}>
                <ProfileImg />
              </div>
              <div className={style.writingBox}>
                <textarea
                  ref={textAreaRef}
                  maxLength={344}
                  placeholder="What is happening?!"
                />
              </div>
            </div>
            <div className={style.bottom}>
              <div className={style.reply}>
                <svg viewBox="0 0 24 24" aria-hidden="true" width={16}>
                  <g>
                    <path d="M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z"></path>
                  </g>
                </svg>
                Everyone can reply
              </div>
              <div className={style.buttonWrapper}>
                <div className={style.attach}>
                  <FileButton />

                  <svg viewBox="0 0 24 24" aria-hidden="true" width={20}>
                    <g>
                      <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                    </g>
                  </svg>
                </div>
                <button className={style.postButton} type="button">
                  <div>Post</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
