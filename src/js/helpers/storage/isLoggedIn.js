import * as storage from "../../services/storage.js";

export function isLoggedIn() {
    return storage.load("token") ? true : false;
}