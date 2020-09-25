interface Item {
  title: string;
  originallink: string;
  link: string;
  description: string;
  pubDate: string;
}

export interface SearchResult {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: Array<Item>;
}
