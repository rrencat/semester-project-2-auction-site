import { API_AUCTION_URL } from "../constants.js";

export async function getListings() {
    const url = `${API_AUCTION_URL}/listings`;
    const response = await fetch(url);

	if (response.ok) {
		console.log(response);
		return await response.json();
	}

	throw new Error();
}

