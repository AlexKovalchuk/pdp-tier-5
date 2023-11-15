export interface CredentialsToSign {
  email?: string;
  password?: string;
}

export interface SignInResponse {
  token: string;
  data: any;
  expiresIn: number;
}

export interface ProfileState {
  name?: string;
  surName?:string;
  age?: string;
  image?: string;
  idToken?: string;
  expiresAt?: string;
}