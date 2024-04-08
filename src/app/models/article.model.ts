import { Category } from "./category.model";
import { ImageModel } from "./image-model.model";

export class Article {
  id: number;
  title: string;
  catId: number
  bannerTitle: string;
  bannerDescription: string;
  image: ImageModel;
  content: string;
  creationDate: Date;
  category: Category;

  constructor() {
    this.creationDate = new Date();
  }
}