import { CONSOLE_COLORS } from "../domain/valueObjects/consts/ConsoleColors";
import { drawLine, printTitle } from "../shared/utils/StringUtils";

export class Service {
  name: string;
  type: "Database" | "Http" | "Inherited Service" | "Third Party";
  serviceOwner: string;
  constructor(args: {
    name: string;
    type: "Database" | "Http" | "Inherited Service" | "Third Party";
    serviceOwner: string;
  }) {
    this.name = args.name;
    this.type = args.type;
    this.serviceOwner = args.serviceOwner;
    this.PrintConfiguration();
  }
  private PrintConfiguration() {
    const configuration = `${this.name} - ${this.serviceOwner}`;
    console.log(
      CONSOLE_COLORS.cyan,
      printTitle(`${this.type} Service`, configuration.length, "_"),
    );
    console.log(CONSOLE_COLORS.yellow, configuration);
    console.log(drawLine(configuration.length, "-._."));
  }
}
