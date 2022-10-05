export interface Auth {
  id?: number;
  user: string;
  password: string;
  rememberUser: boolean;
  token?: string;
}
