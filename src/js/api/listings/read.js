import { API_SOCIAL_URL } from "../constants.js";

export async function getListings() {
    const url = `${API_SOCIAL_URL}/listings`;
    const response = await fetch(url);

	if (response.ok) {
		console.log(response);
		return await response.json();
	}

	throw new Error();
}

