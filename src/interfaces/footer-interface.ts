export interface IFooterListData {
  data: {
    code: number;
    data: IFooterOnlyList[];
  };
  status: number;
  statusText: string;
}
export interface IFooterOnlyList {
  additional: string;
  address: string;
  cell_phone: string;
  facebook: string;
  have_facebook: boolean;
  have_instagram: boolean;
  have_linkedIn: boolean;
  have_pinterest: boolean;
  have_twitter: boolean;
  have_youtube: boolean;
  id: number;
  instagram: string;
  linkedIn: string;
  local_phone: string;
  name: string;
  pinterest: string;
  twitter: string;
  youtube: string;
}
