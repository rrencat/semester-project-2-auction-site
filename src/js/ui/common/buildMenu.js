import { isLoggedIn, getName } from "../../helpers/storage/index.js";
import * as handlers from "../../handlers/index.js";

export default function buildMenu(pathname) {
	const menu = document.querySelector("#menu");

	if (isLoggedIn()) {
		const name = getName();

		menu.innerHTML += `<li class="nav-item">
                        <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${pathname === "/profile/" ? "active" : ""}" href="/profile">Profile</a>
                      </li>
                      <li class="nav-item">
                        <button class="btn btn-primary" id="logout">Log out ${name}</button>
                      </li>`;

		handlers.logoutListener();
	} else {
		menu.innerHTML += `<li class="nav-item">
                        <a class="nav-link ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" href="/">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${pathname === "/profile/login" ? "active" : ""}" href="/profile/login">Login</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link ${pathname === "/profile/register" ? "active" : ""}" href="/profile/register">Register</a>
                      </li>`;
	}
}