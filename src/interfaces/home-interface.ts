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

export interface IDataApiTitles {
  data: { data: IDataTitles[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataTitles {
  carousel_subtitle: string;
  carousel_title: string;
  catalogue_subtitle: string;
  catalogue_title: string;
  grass_title: string;
  header_subtitle: string;
  header_title: string;
}
