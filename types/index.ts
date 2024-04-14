export interface PageData {
  id: string;
  coverImage?: string;
  title: string;
  description: string;
  createdTime: string;
  lastUpdated: string;
  authorId: string;
  lastEditedBy: string;
  tags: PostTag[];
  icon: string;
  category: string;
}

export type PostTag = {
  id: string;
  name: string;
  color: string;
};

export type TagType = {
  [key: string]: number;
};

export type ContentHeader = {
  label: string;
  link: string;
  order: number;
};
