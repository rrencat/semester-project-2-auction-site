import * as storage from "../../services/storage.js";

export function getName() {
	return storage.load("name");
}