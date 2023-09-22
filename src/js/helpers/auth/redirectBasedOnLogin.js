import { isLoggedIn } from "../storage/index.js";

/**
 * This function redirects the user based on whether or not they are logged in
 * @param {*} pathname 
 */
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