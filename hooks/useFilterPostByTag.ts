import { create } from "zustand";

type TagStore = {
  tagname: string;
  setTagname: (name: string) => void;
};

const useFilterPostByTag = create<TagStore>((set) => ({
  tagname: "",
  setTagname: (name) => set({ tagname: name }),
}));

export default useFilterPostByTag;
