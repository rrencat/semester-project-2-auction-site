import { API_AUCTION_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";
import { getName } from "../../helpers/storage/getName.js";

/**
 * This function makes an API call to get the Profile
 * @returns - The profile
 */
export async function getProfile() {
    const name = getName();

    const getProfileURL = `${API_AUCTION_URL}/profiles/${name}`;
    const response = await fetchToken(getProfileURL);

    if (response.ok) {
        return await response.json();
    }
    
    throw new Error(response.statusText);
}