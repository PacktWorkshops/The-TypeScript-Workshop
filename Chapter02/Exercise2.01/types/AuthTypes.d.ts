declare module "AuthTypes" {
    export interface User {
        email: string;
        roles: Array<string>;
        source?: string;
    }
}