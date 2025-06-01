export interface ActionResponse {
    success?: boolean;
    message?: string;
    errors?: Record<string | number | symbol, string[] | undefined>;
}
