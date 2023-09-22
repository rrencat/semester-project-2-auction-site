import { API_AUCTION_URL } from "../constants.js";

const action = "/listings"

/**
 * This function gets all the listings from the API
 * @throws {error} Throws new error if call is unsuccessfull
 * @returns all the listings from the API
 */
export async function getListings() {
    const url = API_AUCTION_URL + action;
    const response = await fetch(url);
    
    const json = await response.json();
    
    if (response.ok) {
        return json;
    }

    throw new Error(json.errors[0].message);
}