export interface CredentialsToSign {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  data?: any;
  expiresIn?: number;
  refreshToken?: string;
  registered?: string;
}

export interface ProfileState {
  name?: string;
  surName?:string;
  age?: string;
  image?: string;
  token?: string;
  expiresIn?: string;
  refreshToken?: string;
  registered?: string;
}