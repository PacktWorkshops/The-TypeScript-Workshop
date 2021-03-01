import { injectable } from "inversify";
import { ConfigService } from "../interfaces/config-service.interface";

@injectable()
export class EnvConfigService implements ConfigService {
  getAll(): Record<string, string | undefined> {
    return process.env;
  }

  get(key: string): string | undefined {
    return process.env[key];
  }
}
