import * as handlers from "./handlers/index.js";


export default function router() {
    const pathname = window.location.pathname;

    

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