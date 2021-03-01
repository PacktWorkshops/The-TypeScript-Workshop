export interface ConfigService {
    getAll(): Record<string, string | undefined>;
    get(key: string): string | undefined;
  }
  