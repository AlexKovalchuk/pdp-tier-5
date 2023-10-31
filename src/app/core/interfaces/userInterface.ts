export interface CredentialsToSign {
  email?: string;
  password?: string;
}

export interface SignInResponse {
  token: string;
  data: any;
  expiresIn: number;
}