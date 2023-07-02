import { Service } from "../../infrastructure/Service";

export interface ILogRepository extends Service {
  write(message: string, color?: string): void;
}
