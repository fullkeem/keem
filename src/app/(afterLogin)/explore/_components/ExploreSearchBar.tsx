"use client";

import { useRef, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import style from "./exploreSearchBar.module.css";
import { useSearchStore } from "@/app/store";

export default function ExploreSearchBar() {
  const { inputValue, setInputValue } = useSearchStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
    inputRef.current?.focus();
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      e.preventDefault();
      router.push(`/search?q=${inputValue}`);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.search}>
        <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
          </g>
        </svg>
        <input
          type="search"
          placeholder="Search"
          value={inputValue}
          ref={inputRef}
          onChange={handleInput}
          onKeyDown={handleEnter}
        />
        {inputValue && (
          <button
            type="button"
            className={style.cancelButton}
            onClick={handleClearInput}
          >
            <svg viewBox="0 0 15 15" aria-hidden="true" width={10} height={10}>
              <g>
                <path d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"></path>
              </g>
            </svg>
          </button>
        )}
      </form>
    </div>
  );
}
