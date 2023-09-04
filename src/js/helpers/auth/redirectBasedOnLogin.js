import { isLoggedIn } from "../storage/index.js";

export function redirectBasedOnLogin(pathname) {
	if (isLoggedIn()) {
		if (pathname === "/profile/login" || pathname === "/profile/register") {
			location.href = "/index.html";
		}
	} else {
		if (pathname === "/profile/" || pathname === "/profile/index.html") {
			location.href = "/auth/login.html";
		}
	}
}