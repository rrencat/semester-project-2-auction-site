import { isLoggedIn, getName } from "../../helpers/storage/index.js";
import * as handlers from "../../listeners/index.js";

export default function buildMenu(pathname) {
	const menu = document.querySelector("#menu");

	if (isLoggedIn()) {
		const name = getName();

		menu.innerHTML += `<li class="nav-item">
                          <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="/">Auction</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ${pathname === "/profile/" ? "active" : ""}" href="/profile">${name}</a>
                        </li>
                        <li class="nav-item">
                          <button class="btn btn-secondary" id="logout">Log out</button>
                        </li>`;

		handlers.logoutListener();
	} else {
		menu.innerHTML += `<li class="nav-item">
                          <a class="nav-link ${pathname === "/profile/login" ? "active" : ""}" href="/profile/login">Login</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ${pathname === "/profile/register" ? "active" : ""}" href="/profile/register">Register</a>
                        </li>`;
	}
}