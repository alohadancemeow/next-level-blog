export interface PageData {
  id: string;
  coverImage?: string;
  title: string;
  description: string;
  createdTime: string;
  lastUpdated: string;
  authorId: string;
  lastEditedBy: string;
  tags: string[];
  icon: string;
}

export type PostTag = {
  id: string;
  name: string;
  color: string;
};

export type Tags = {
  [key: string]: number;
};
