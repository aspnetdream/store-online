export interface JwtPayload {
  jti: string;
  iss: string;
  iat: string;
  aud: string[];
  exp: number;
  Username: string;
  nbf: number;
}
