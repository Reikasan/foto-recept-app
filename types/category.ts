export type CategoryType = {
  id: number;
  title: string;
  image: string | undefined;
  count: number;
  variant: "horizontal" | "vertical" | "square";
};
