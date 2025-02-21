export type Skill = {
  id: string;
  type: "framework" | "language" | "database" | "cloud" | "testing" | "devops" | "other";
  name: string;
  description: string;
  url: string;
  imageUrl: string;
};
