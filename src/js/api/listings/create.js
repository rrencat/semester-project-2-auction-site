import { API_AUCTION_URL } from "../constants.js";
import { fetchToken } from "../fetchToken.js";

const action = "/listings";
const method = "POST";


export async function createListing(data) {
        const createPostURL = API_AUCTION_URL + action;
    
        const response = await fetchToken(createPostURL, {
            method,
            body: JSON.stringify(data)
        })
       
        console.log(response);
        return await response.json();
}