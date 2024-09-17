import { FetchOutput } from "@appTypes/fetching.types";

const urlAPI = process.env.NEXT_PUBLIC_URL_API;
const headerToken = process.env.NEXT_PUBLIC_HEADER_TOKEN;

// ✨ ✨ ✨ ✨ Improved get fetching ✨ ✨ ✨ ✨
export async function _$get<TPayloadOutput>(path: string) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${urlAPI}${path}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "x-rapidapi-key": `${headerToken}`,
            }
        });
        const data  = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};
// ✨ ✨ ✨ ✨ Improved post fetching ✨ ✨ ✨ ✨
export async function _$post<TPayloadOutput, TInput>(path:string, dataToSend: TInput, authToken?: string | null ) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${urlAPI}${path}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            },
            body: JSON.stringify({...dataToSend})
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};
// ✨ ✨ ✨ ✨ Improved delete fetching ✨ ✨ ✨ ✨
export async function _$delete<TPayloadOutput, TInput>(path:string, dataToSend: TInput, authToken?: string | null ) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${urlAPI}${path}`,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            },
            body: JSON.stringify({...dataToSend})
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};
// ✨ ✨ ✨ ✨ Improved put fetching ✨ ✨ ✨ ✨
export async function _$put<TPayloadOutput, TInput>(path:string, dataToSend: TInput, authToken?: string | null ) : Promise<FetchOutput<TPayloadOutput>> {
    try {
        const response = await fetch(`${urlAPI}${path}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            },
            body: JSON.stringify({...dataToSend})
        });
        const data = await response.json();
        return { data, codeStatus: response.status};
    } catch (error) {
        let message: string = "";
        if (error instanceof TypeError || error instanceof Error)
            message = error.message;
        return { error: message }
    }
};



