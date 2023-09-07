import * as api from "../api/profiles/index.js";
import displayMessage from "../ui/common/displayMessage.js";
import renderProfile from "../templates/profile/profile.js";

export async function displayProfile() {
    try {
        const profile = await api.getProfile();
        renderProfile(profile);
        console.log(profile);
    } catch (error) {
        console.log(error);
        displayMessage("danger", error, "#profileContainer");
    }
}
