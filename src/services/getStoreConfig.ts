
import type { StoreConfig } from "../types/HomeTypes";

export const getStoreConfig = async () : Promise<StoreConfig> => {
    const response = await fetch('/public/store-config.json');
    const data = await response.json();
    return data;
}