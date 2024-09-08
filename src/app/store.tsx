import { create } from "zustand";

interface TabState {
  tab: "For you" | "Following";
  setTab: (value: "For you" | "Following") => void;
}

export const useTabStore = create<TabState>((set) => ({
  tab: "For you",
  setTab: (value) => set({ tab: value }),
}));

interface ContentState {
  content: string;
  setContent: (value: string) => void;
}

export const useContentStore = create<ContentState>((set) => ({
  content: "",
  setContent: (value) => set({ content: value }),
}));

type SearchState = {
  inputValue: any;
  setInputValue: (value: any) => void;
};

export const useSearchStore = create<SearchState>((set) => ({
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
}));
