export interface IDataApi {
  data: { data: IDataCarousels[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataCarousels {
  description: string;
  id: number;
  subtitle: string;
  title: string;
  catalogue_headers: {
    catalogue: number;
    id: string;
    picture: string;
    title: string;
  }[];
}
