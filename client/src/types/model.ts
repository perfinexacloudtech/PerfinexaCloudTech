export interface OpenFormProps {
  onOpen: () => void;
}


export interface Blog {
  _id: string;
  title: string;
  slug: string;
  authorName: string;
  blogCategory: string;
  views: number;
  createdAt: string;
  thumbnailUrl?: string | null;
}
