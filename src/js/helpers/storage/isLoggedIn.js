import * as storage from "../../services/storage.js";

export function isLoggedIn() {
    return storage.get("token") ? true : false;
}