import { ILogRepository } from "../application/repositories/ILogRepository";
import { Service } from "./Service";

export default class ConsoleLogService extends Service implements ILogRepository {
  constructor() {
    super({
      name: "Console Log Service",
      serviceOwner: "web-browser",
      type: "Third Party",
    });
  }

  write = (message: string): void => {
    const line = `[${new Date().toISOString()}]: ${message}`;
    console.log(line);
  };
}
