interface CategoryTypes {
  _id: string;
  name: string;
  _v: number;
}

interface GameItemTypes {
  _id: string;
  status: string;
  name: string;
  thumbnail: string;
  category: CategoryTypes;
}
