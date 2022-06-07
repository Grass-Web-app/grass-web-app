export interface CardsModel {
  area: string;
  sub: string;
  title: string;
  description: string;

  img: string;
}

export interface IEngineeredListData {
  data: {
    code: number;
    data: IEngineredOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IEngineredOnlyList {
  description: string;
  icon: string;
  id: number;
  subtitle: string;
  title: string;
}
