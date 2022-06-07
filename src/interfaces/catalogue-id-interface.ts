export interface IDataApi {
  data: { data: IDataCatalogue; code: number };
  status: number;
  statusText: string;
}

export interface IDataCatalogue {
  description: string;
  id: number;
  subtitle: string;
  title: string;
  catalogue_headers: ICatalogueHeaders[];
  catalogue_big_description: ICatalogueBigDescription[];
  catalogue_big_card_carousel: ICatalogueBigCardCarousel[];
  catalogue_carousel_description: ICatalogueCarouselDescription[];
}
export interface ICatalogueHeaders {
  catalogue: number;
  id: string;
  picture: string;
  title: string;
}
export interface ICatalogueBigDescription {
  catalogue: number;
  description: string;
  id: number;
  title: string;
}
export interface ICatalogueBigCardCarousel {
  benefits: string;
  catalogue: number;
  description: string;
  id: number;
  subtitle: string;
  title: string;
}
export interface ICatalogueCarouselDescription {
  catalogue: number;
  description: string;
  id: number;
  picture: string;
  subtitle: string;
  title: string;
}
