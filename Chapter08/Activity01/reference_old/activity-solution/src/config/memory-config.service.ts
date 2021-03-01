import { injectable } from "inversify";
import { ConfigService } from "../interfaces/config-service.interface";

@injectable()
export class MemoryConfigService implements ConfigService {
  constructor(private readonly config: Record<string, string | undefined>) {}

  getAll(): Record<string, string | undefined> {
    return this.config;
  }

  get(key: string): string | undefined {
    return this.config[key];
  }
}
