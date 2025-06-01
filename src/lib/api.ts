import { cookies } from "next/headers";

export const api = async (url: string, options: RequestInit) => {
    const cookiesStore = await cookies();

    const authenticatedOptions = cookiesStore.get("access_token")
        ? {
              ...options,
              headers: {
                  ...options.headers,
                  Authorization: `Bearer ${cookiesStore.get("access_token")?.value}`,
              },
          }
        : options;

    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${url}`, authenticatedOptions);
};

export interface ApiErrorPayload {
    statusCode?: number;
    message: string;
}
