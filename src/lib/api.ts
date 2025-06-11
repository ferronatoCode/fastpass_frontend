export const api = async (url: string, options: RequestInit) => {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, options);
};

export interface ApiErrorPayload {
    statusCode?: number;
    message: string;
}
