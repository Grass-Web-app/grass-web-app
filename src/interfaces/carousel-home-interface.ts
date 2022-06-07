export interface IDataApiCarousel {
  data: { data: IDataCarousels[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataCarousels {
  id: number;
  image: string;
  description: string;
  title: string;
}
