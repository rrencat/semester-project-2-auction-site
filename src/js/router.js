import * as handlers from "./handlers/index.js";

export default function router() {
    const path = location.pathname;

    switch (path) {
        case "/profile/register/":
            handlers.setRegisterFormListener()
            break; 
        case "/profile/login/":
            handlers.setLoginFormListener()
            break;
    } 
}