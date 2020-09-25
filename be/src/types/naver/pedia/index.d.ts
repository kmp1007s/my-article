interface Item {
  title: string;
  link: string;
  description: string;
  thumbnail: string;
}

export interface SearchResult {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: Array<Item>;
}
