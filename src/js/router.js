import * as handlers from "./handlers/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import { redirectBasedOnLogin } from "./helpers/auth/redirectBasedOnLogin.js";


export default function router() {
    const pathname = window.location.pathname;

    redirectBasedOnLogin(pathname);
    buildMenu(pathname);

    switch (pathname) {
        case "/":
        case "index.html":
            break;
        case "/profile/register/":
            handlers.setRegisterFormListener()
            break; 
        case "/profile/login/":
            handlers.setLoginFormListener()
            break;
        case "/profile/":
            handlers.logoutListener()
            break;
    } 
}