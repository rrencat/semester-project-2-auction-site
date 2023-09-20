import * as listeners from "./listeners/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import { redirectBasedOnLogin } from "./helpers/auth/redirectBasedOnLogin.js";
import { displayProfile } from "./view/profile.js";
import { displayListings } from "./view/listings.js";



export default function router() {
    const pathname = window.location.pathname;

    redirectBasedOnLogin(pathname);
    buildMenu(pathname);

    switch (pathname) {
        case "/":
        case "/index.html":
            displayListings()
            break;
        case "/profile/register/":
            listeners.setRegisterFormListener()
            break; 
        case "/profile/login/":
            listeners.setLoginFormListener()
            break;
        case "/profile/":
            displayProfile();
            listeners.logoutListener()
            break;
        case "/listings/add/":
            listeners.setCreateListingListener()
            break;
    } 
}