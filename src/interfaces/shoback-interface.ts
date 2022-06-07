export interface IParallListData {
  data: {
    code: number;
    data: IparallaxOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IparallaxOnlyList {
  description: string;
  id: number;
  title: string;
}
