import { TextAlignProperty } from 'csstype';

export interface Header {
  name: string;
  ref: string;
  render?: (data?: any) => JSX.Element;
}
