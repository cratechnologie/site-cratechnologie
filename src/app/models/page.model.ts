import { ImageModel } from "./image-model.model";

export class Page {
  id: number;
  title: string;
  bannerTitle: string;
  bannerDescription: string;
  image: ImageModel;
  content: string;
  creationDate: Date;

  constructor() {
    this.creationDate = new Date();
  }
}
