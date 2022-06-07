export interface IDataApiCardBottom {
  data: { data: IDataCards[]; code: number };
  status: number;
  statusText: string;
}

export interface IDataCards {
  description: string;
  id: number;
  image: string;
  subtitle: string;
  title: string;
}
