export type fetchData = {
    name : 'string',
    id : 'string',
    createdAt : 'string',
    body : 'string',
    avatar : 'string',
    Poster : 'string'
}

export const fetchedData = async () => {
    const response = await fetch(`https://658830a590fa4d3dabf99286.mockapi.io/post`);
    const data : fetchData[] = await response.json();
    return data;
}
