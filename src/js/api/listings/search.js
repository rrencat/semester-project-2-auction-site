import { API_AUCTION_URL } from "../constants.js";

/**
 * This function searches through the listings from the API using tags
 * @param {string} tag - What the user is searching for
 * @throws {error} - Throws new error if the search failed
 * @returns - Listing(s) with searched tag
 */
export async function search(tag) {
    const url = `${API_AUCTION_URL}/listings?_tag=${tag}`;

    const response = await fetch(url);

    if (response.ok) {
        const json = await response.json();
        return json;
    }

    throw new Error("Search failed");
}

