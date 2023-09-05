import { API_AUCTION_URL } from "../../constants.js";

const action = "/auth/register";
const method = "post";

/**
 * Allows a user to register
 * @param {object} profile - The user profile containing registration data.
 * @returns {void}
 */

export async function register(profile) {
    const registerURL = API_AUCTION_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    });

    const result = await response.json();

    if (response.ok) {
        return result;
    }

    throw new Error(result.errors[0].message);
}