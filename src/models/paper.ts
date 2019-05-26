export type Reference = {
  type: "published",
  doi: string;
} | {
  type: "chainpaper",
  paperId: string;
};

export type PaperDraft = {
  title: string;
  refs: Reference[]
  keywords: string;
  abstractContent: string
  introduction: string
  content: string
  conclusion: string;
  acknowledgement: string;
}

export type Comment = {
  userId: string;
  time: string; // Unix UTC时间戳
  content: string;
  stars: number; // 赞数
}

export type PaperInfo = {
  paperId: string;
  authors: string[]; // 0是上传者
  paper: PaperDraft;
  uploadTime: string; // Unix UTC时间戳
  score: number; // 10分满分
  stars: number; // Star数
  comments: Comment[]; // 评论数量
  state: "open" | "submitted"; // 开放可评论；已提交
}