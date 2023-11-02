export const get = async <TResponse>(url: string) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
    });

    return await response.json() as TResponse; 
}

export const post = async <TResponse, TBody = {}>(url: string, body?: TBody) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    return await response.json() as TResponse; 
}