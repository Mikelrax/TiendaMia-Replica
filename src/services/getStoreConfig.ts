export const getStoreConfig = async () : Promise<any> => {
    const response = await fetch('/public/store-config.json');
    const data = await response.json();
    return data;
}