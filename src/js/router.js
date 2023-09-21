import * as listeners from "./listeners/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import { redirectBasedOnLogin } from "./helpers/auth/redirectBasedOnLogin.js";
import { displayProfile } from "./view/profile.js";
import { displayListings } from "./view/listings.js";
import searchListener from "./listeners/listings/searchListener.js";
import handleHideResultsOnDocumentClick from "./helpers/search/handleHideResultsOnDocumentClick.js";

export default function router() {
    const pathname = window.location.pathname;

    redirectBasedOnLogin(pathname);
    buildMenu(pathname);

    switch (pathname) {
        case "/":
        case "/index.html":
            displayListings()
            searchListener();
            handleHideResultsOnDocumentClick();
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
        case "/profile/edit/":
            listeners.setUpdateAvatarListener()
            break;
    } 
}