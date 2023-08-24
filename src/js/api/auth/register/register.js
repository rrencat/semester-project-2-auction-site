import { API_SOCIAL_URL } from "../constants.js";

const action = "/auth/register";
const method = "post";

/**
 * Allows a user to register
 * @param {object} profile - The user profile containing registration data.
 * @returns {void}
 */

export async function register(profile) {
    const registerURL = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()
    return result
}