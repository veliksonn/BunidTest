import { API_PATH, GOOGLE_API_KEY } from 'setup';


const apiCall = async (
    query: string,
    startIndex: number,
    onSuccess?: (data: any) => void
): Promise<any> => {
    const url = `${ API_PATH }?q=${ query }&startIndex=${ startIndex }&key=${ GOOGLE_API_KEY }`;

    const response = await fetch(url, { method: 'GET' });

    // Handle error:
    if (!response.ok) {
        // Try to unpack error:
        try {
            const json = await response.json();
            console.error(json);

        // Couln't unpack error, nothing left to do:
        } catch(error) {
            console.error(error);
        }

        return;
    }

    // Unpack response.
    const json = await response.json();

    // Send back retrieved data if callback provided:
    if (onSuccess) onSuccess(json);

    // Otherwise, return json if you want to use the data directly
    // via await instead of callback:
    return json;
};


export default apiCall;
