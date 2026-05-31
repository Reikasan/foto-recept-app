export type CategoryType = {
  id: number;
  title: string;
  image?: string;
  count: number;
  shapeVariant: "horizontal" | "vertical" | "verticalLg" | "square";
  changePosition?: boolean;
};
