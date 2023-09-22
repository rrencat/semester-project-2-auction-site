import * as storage from "../../services/storage.js";

/**
 * This function handles the listener for the logout form and removes items in local storage
 */
export function logoutListener() {
    const logoutButton = document.querySelector("#logout");

    logoutButton.addEventListener("click", () => {
        storage.remove("token");
        storage.remove("name");
        storage.remove("profile");
        window.location = "/";
    });
}