export interface Destination {
  id: number;
  contryName: string;
  cityName: string;
  image: string;
  contentCnt: number;
  // flight: {
  //   price: number;
  //   isDirect: boolean;
  // };
  // hotel: {
  //   price: number;
  //   stars: number;
  // };
}

export interface SpecialOffer {
  id: string;
  title: string;
  description: string;
  discount: string;
}