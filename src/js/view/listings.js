import * as api from "../api/listings/index.js";
import displayMessage from "../ui/common/displayMessage.js";
import renderListings from "../templates/listings/listings.js";

export async function displayListings() {
    try {
        const profile = await api.getListings();
        renderListings(profile);
    } catch (error) {
        console.log(error);
        displayMessage("danger", error, "#listingsContainer");
    }
}
