import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Disney",
    categoryImg:
      "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1650153156/fusionTv/images/viewers-disney_xfgppe.png",
    categoryVideo:
      "https://res.cloudinary.com/dgl5z5ozi/video/upload/v1650153160/fusionTv/videos/1564674844-disney_cyskkh.mp4",
  },
  {
    _id: uuid(),
    categoryName: "Pixar",
    categoryImg:
      "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1650153151/fusionTv/images/viewers-pixar_jceusn.png",
    categoryVideo:
      "https://res.cloudinary.com/dgl5z5ozi/video/upload/v1650153158/fusionTv/videos/1564676714-pixar_dny71m.mp4",
  },
  {
    _id: uuid(),
    categoryName: "Marvel",
    categoryImg:
      "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1650153155/fusionTv/images/viewers-marvel_bmjcxd.png",
    categoryVideo:
      "https://res.cloudinary.com/dgl5z5ozi/video/upload/v1650153160/fusionTv/videos/1564676115-marvel_oju9zf.mp4",
  },
  {
    _id: uuid(),
    categoryName: "Star Wars",
    categoryImg:
      "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1650153151/fusionTv/images/viewers-starwars_w1trxh.png",
    categoryVideo:
      "https://res.cloudinary.com/dgl5z5ozi/video/upload/v1650153164/fusionTv/videos/1608229455-star-wars_tndad1.mp4",
  },
  {
    _id: uuid(),
    categoryName: "Nat Geo",
    categoryImg:
      "https://res.cloudinary.com/dgl5z5ozi/image/upload/v1650153154/fusionTv/images/viewers-national_eboaiv.png",
    categoryVideo:
      "https://res.cloudinary.com/dgl5z5ozi/video/upload/v1650153164/fusionTv/videos/1564676296-national-geographic_ibbc7r.mp4",
  },
];
