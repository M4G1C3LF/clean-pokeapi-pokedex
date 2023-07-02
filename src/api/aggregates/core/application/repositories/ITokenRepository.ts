import { Service } from "../../infrastructure/Service";

export interface ITokenRepository extends Service {
  generateToken(payload: any, expired?: number | string): string;
  verifyToken(token: string): boolean;
  decryptToken(token: string): any;
}
